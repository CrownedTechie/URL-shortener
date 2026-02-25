import mongoose from "mongoose";
const { Schema, model } = mongoose;

const urlSchema = new Schema(
	{
		longUrl: {
			type: String,
			required: [true, "Please provide a long URL"],
		},
		shortCode: {
			type: String,
			required: [true, "Please provide a short code"],
			unique: true,
		},
	},
	{ timestamps: true },
);

export default model("Url", urlSchema);
