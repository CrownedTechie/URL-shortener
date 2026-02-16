import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World from my express app!");
});

export default app;
