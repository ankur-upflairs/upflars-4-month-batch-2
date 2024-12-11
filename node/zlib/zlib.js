const zlib = require('node:zlib');
const fs = require('node:fs')

let source = fs.createReadStream('pixels.jpg');

let dest = fs.createWriteStream('image.gz');

source.pipe(zlib.createGzip()).pipe(dest);
