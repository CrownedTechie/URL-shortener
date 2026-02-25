import mongoose from "mongoose";

const { Schema, model } = mongoose;

const counterSchema = new Schema({
	name: { type: String, required: true, unique: true },
	value: { type: Number, default: 0 },
});

export default model("Counter", counterSchema);
