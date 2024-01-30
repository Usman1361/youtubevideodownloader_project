import express from "express";
import { download } from "../../controller/YTController/YT.js";
const router = express.Router();

router.get("/download/:yid", download);

export default router;
