import express from "express";
import { info } from "../../controller/YTController/YT.js";
import ytdl from "ytdl-core";
import { spawn } from "child_process";
const router = express.Router();

router.get("/info/:yid", info);
router.get("/links", async (req, res) => {
  try {
    const videoUrl = req.query.url; // Get YouTube video URL from query parameter
    const quality = req.query.quality || "highest"; // Get video quality from query parameter, default to highest

    // Validate URL
    if (!ytdl.validateURL(videoUrl)) {
      return res.status(400).json({ error: "Invalid YouTube URL" });
    }

    // Get video info
    const info = await ytdl.getInfo(videoUrl);

    // Filter available formats based on requested quality
    const formats = ytdl.filterFormats(info.formats, "videoandaudio");
    let selectedFormat;

    // Find the requested quality format
    if (quality === "highest") {
      selectedFormat = formats[0]; // Highest quality available
    } else {
      selectedFormat = formats.find(
        (format) => format.qualityLabel === quality
      );
    }

    if (!selectedFormat) {
      return res
        .status(404)
        .json({ error: "Requested video quality not found" });
    }

    // Set response headers
    res.header(
      "Content-Disposition",
      `attachment; filename="${info.videoDetails.title}.mp4"`
    );
    res.header("Content-Type", "video/mp4");

    // Spawn ffmpeg process to combine audio and video streams and pipe output to response
    const ffmpegProcess = spawn("ffmpeg", [
      "-i",
      selectedFormat.url, // Input video URL
      "-i",
      selectedFormat.url, // Input audio URL
      "-c:v",
      "copy", // Copy video codec
      "-c:a",
      "aac", // Set audio codec to AAC
      "-strict",
      "experimental",
      "-shortest", // Finish encoding when the shortest input stream ends
      "pipe:1", // Output to pipe
    ]);

    ffmpegProcess.stdout.pipe(res);

    ffmpegProcess.on("close", () => {
      console.log("ffmpeg process closed");
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;
