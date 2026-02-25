import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
const DB = process.env.DATABASE_LOCAL;

mongoose
	.connect(DB)
	.then(() => {
		console.log("Local DB connection successful");
	})
	.catch((error) => console.log(error));

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
