import dotenv from "dotenv";
import app from "./app.js";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
// const DB = process.env.DATABASE_LOCAL;
const DB = process.env.DATABASE_PROD.replace(
	"<db_password>",
	process.env.DATABASE_PASSWORD,
);

mongoose
	.connect(DB)
	.then(() => {
		console.log("DB connection successful");
	})
	.catch((error) => console.log(error));

app.listen(port, () => {
	console.log(`App running on port ${port}...`);
});
