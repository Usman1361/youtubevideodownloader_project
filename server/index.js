import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ytRoutes from "./routes/YTRoutes/YT.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use("/api/yt", ytRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || "Internal Server Error";

  res.status(statusCode).json({ message });
});

app.listen(process.env.PORT || 8888, () => {
  console.log(`Server is running on port ${process.env.PORT || 8888}`);
});
