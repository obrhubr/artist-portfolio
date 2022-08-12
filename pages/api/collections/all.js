import db from '../../../utils/db';

export default async function handler(req, res) {
	var collections = [];

	const snapshot = await db.collection('collections').get();
	snapshot.forEach((doc) => {
		var data = doc.data();

		collections.push({ id: data.collectionId, description: data.description, name: data.name, priceRange: data.priceRange, imageUrl: data.imageUrl, tags: data.tags });
	});

    res.status(200).json({ data: collections })
}