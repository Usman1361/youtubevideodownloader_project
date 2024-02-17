import axios from "axios";

export const info = async (req, res, next) => {
  const yid = req.params.yid;
  if (!yid) {
    return res.status(400).json({ error: "No id was provided" });
  }

  const options = {
    method: "GET",
    url: "https://youtube-video-download-info.p.rapidapi.com/dl",
    params: { id: yid },
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": process.env.API_HOST,
    },
  };

  try {
    const response = await axios.request(options);

    const title = response.data.title;
    const thumb = response.data.thumb;

    const formats = [
      {
        name: "HD Quality",
        type: "videoandaudio",
        itag: "247",
        container: "mp4",
        quality: "720p",
      },
      {
        name: "Low Quality",
        type: "videoandaudio",
        itag: "18",
        container: "mp4",
        quality: "360p",
      },
      {
        name: "Only Video (No Audio)",
        type: "videoonly",
        itag: "248",
        container: "webm",
        quality: "720p",
      },
      {
        name: "Audio",
        type: "audioonly",
        itag: "140",
        container: "mp3",
        quality: "",
      },
    ];

    res.json({
      title,
      thumb,
      formats,
    });
  } catch (error) {
    next(error);
  }
};
