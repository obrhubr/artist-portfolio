import db from '../../../utils/db';

export default async function handler(req, res) {
	var collections = [];

    const collectionsRef = db.collection('images');
    // Create a query against the collection
    const snapshot = await collectionsRef.where('collectionId', '==', req.body.id).get();
	snapshot.forEach((doc) => {
		var data = doc.data();

		collections.push({ id: data.imageId, collectionId: data.collectionId, name: data.name, price: data.price, imageUrl: data.imageUrl, tags: data.tags });
	});

    res.status(200).json({ data: collections })
}