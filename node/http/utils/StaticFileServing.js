const path= require('path')
const fs = require('fs')
exports.serveStaticFiles=function serveStaticFiles(req, res, staticFolder) {
    // Determine the requested file path
    let filePath = path.join(staticFolder, req.url === '/' ? '../views/index.html' : req.url);

    // Get the file extension
    const extname = path.extname(filePath);

    // Default MIME type
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.wav': 'audio/wav',
        '.mp4': 'video/mp4',
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Check if the file exists
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // File not found, serve a default 404 page
                fs.readFile(path.join(staticFolder, '404.html'), (error, notFoundContent) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(notFoundContent || '404 - File Not Found', 'utf-8');
                    return false
                });
            } else {
                // Other server errors
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
                return false

            }
        } else {
            // Serve the file
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
            return true;
        }
    });
}