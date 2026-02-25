import UrlModel from "../models/UrlModel.js";
import { createShortUrl } from "../services/url.service.js";

export const shortenUrl = async (req, res) => {
	const { longUrl } = req.body;

	try {
		const result = await createShortUrl(longUrl);
		const baseUrl = `${req.protocol}://${req.get("host")}`;
		const shortUrl = `${baseUrl}/${result.shortCode}`;

		res.status(201).json({
			status: "success",
			data: { ...result._doc, shortUrl },
		});
	} catch (error) {
		res.status(400).json({ status: "fail", message: error.message });
	}
};

export const getLongUrl = async (req, res) => {
	const { shortCode } = req.params;

	try {
		const isFound = await UrlModel.findOne({ shortCode });

		res.redirect(isFound.longUrl);
	} catch (error) {
		res.status(400).json({ status: "fail", message: error.message });
	}
};
