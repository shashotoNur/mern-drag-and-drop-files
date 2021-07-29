const multer = require('multer');

const tenMB = (10 * 1000 * 1000);
const upload = multer(
    {
        storage: multer.diskStorage(
            {
                destination(_req, _file, cb) { cb(null, '../files'); },
                filename(_req, file, cb) { cb(null, `${file.originalname}`); }
            }
        ),
        limits: { fileSize: tenMB }
    }
);

module.exports = upload;