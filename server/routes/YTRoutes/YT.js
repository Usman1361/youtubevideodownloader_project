import express from "express";
import { info } from "../../controller/YTController/YT.js";
import ytdl from "ytdl-core";
const router = express.Router();

router.get("/info/:yid", info);
router.get("/links", async (req, res) => {
  try {
    const url = req.query.url;
    const type = req.query.type;
    const itag = req.query.itag;
    const container = req.query.container;
    const quality = req.query.quality;
    const title = req.query.title;

    if (!ytdl.validateURL(url)) {
      return res.status(400).json({
        message: "Please enter valid youtube link!",
      });
    }

    // Get video info
    const info = await ytdl.getInfo(url);

    // Get available formats
    const formats = ytdl.filterFormats(info.formats, type);

    // Choose the format you prefer, for example, let's choose the highest quality format
    const format = formats.find((format) => format.qualityLabel === quality);

    if (!format) {
      return res
        .status(404)
        .json({ error: "Requested video quality not found" });
    }

    res.header(
      `Content-Disposition", 'attachment; filename=${title}.${container}`
    );

    res.header("Content-Type", format.mimeType);

    ytdl(url, { format: format }).pipe(res);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
