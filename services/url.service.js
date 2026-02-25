import counterModel from "../models/counterModel.js";
import UrlModel from "../models/UrlModel.js";
import { encodeBase62 } from "../utils/base62Encoder.js";

export const getNextId = async () => {
	const counter = await counterModel.findOneAndUpdate(
		{ name: "url_count" },
		{ $inc: { value: 1 } },
		{ new: true, upsert: true },
	);

	return counter.value;
};

export const createShortUrl = async (longUrl) => {
	const id = await getNextId();
	const shortCode = encodeBase62(id);

	const newUrl = await UrlModel.create({ longUrl, shortCode });

	return newUrl;
};
