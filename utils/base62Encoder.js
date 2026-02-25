const BASE62 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

export function encodeBase62(num) {
	if (num === 0) return BASE62[0];

	let result = "";

	while (num > 0) {
		result = BASE62[num % 62] + result;
		num = Math.floor(num / 62);
	}

	return result;
}

// let currentId = 0;

// function getNextId() {
// 	currentId += 1;
// 	return currentId;
// }

// const id = getNextId();
// const shortCode = encodeBase62(id);

// console.log({
// 	id,
// 	shortCode,
// });
