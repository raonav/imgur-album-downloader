This was a quick attempt at downloading all images from an imgur album. Then I discovered when an album contains a lot of images, it only loads a few images at a time before you click a button to load the rest. Well that sucks for scraping but [cheerio](https://github.com/cheeriojs/cheerio) is cool anyway.

Todo:

- Regex magic on the album url parameter to grep the album id
- use a json response which will contain every image in the album
- create a directory per album download link (fs.mkdir)
- make the script more modular so I can actually release my very first node module
- not forget about this project
