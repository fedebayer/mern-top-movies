import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
