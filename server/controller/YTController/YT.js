import axios from "axios";

export const download = async (req, res, next) => {
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

    const videoLinks = response.data.link;

    const link17 = videoLinks["17"];
    const link18 = videoLinks["18"];
    const link22 = videoLinks["22"];

    const link1 = {
      link: link17[0],
      size: link17[2],
      quality: link17[3],
    };

    const link2 = {
      link: link18[0],
      size: link18[2],
      quality: link18[3],
    };

    const link3 = {
      link: link22[0],
      size: link22[2],
      quality: link22[3],
    };

    res.json({
      title,
      thumb,
      links: [link1, link2, link3],
    });
  } catch (error) {
    next(error);
  }
};
