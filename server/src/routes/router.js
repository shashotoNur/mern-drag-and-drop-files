
const Router = require('express').Router();

const upload = require('../middlewares/upload');
const { saveFileData, getAllFiles, downloadAFile } = require('../controllers/filesControllers');

Router.post( '/upload', upload.single('file'), saveFileData,
  (error, _req, res, _next) => { if (error) res.status(500).send(error.message); }
);
Router.get( '/files', getAllFiles );
Router.get( '/download/:id', downloadAFile );

module.exports = Router;