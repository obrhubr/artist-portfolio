# Artist Portfolio

This site helps artists to make their work available as a website.

To change the content, edit the json file in `data/content.json`.

```json
{
	"artist": "Max Mustermann",
	"email": "max@mustermann.at",
	"website": "https://maxmustermann.com",

	"short_bio": "My name is Max Mustermann. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac neque in lorem rhoncus cursus id nec leo. Duis et hendrerit orci, eget semper est.",

	"address": {
		"name": "Address",
		"street": "Musermann Str. 1",
		"city": "1 Mustercity",
		"country": "Mustercountry"
	}
}
```

## Images

![Homepage](.github/page.png)

![About](.github/about.png)

![Collection](.github/collection.png)

## Usage

Upload your images to a GCP Bucket and give each a one different unique name.

![Bucket](.github/bucket.png)

Then create two collections in your firebase database.

### Collections

![Collections](.github/collections.png)

### Images
![Images](.github/images.png)

Download a GCP Firebase service key which allows access to the firebase database containing your artworks and name it `key.json`.
