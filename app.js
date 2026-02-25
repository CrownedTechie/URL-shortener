import express from "express";
import urlRouter from "./routes/urlRoute.js";

const app = express();

app.use(express.json());

app.use("/", urlRouter);

export default app;
