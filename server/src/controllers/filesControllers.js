const path = require('path');

const File = require('../model/File');

const saveFileData = async (req, res) =>
    {
        try
        {
            const { title, description } = req.body;
            const { path, mimetype } = req.file;

            const file = new File(
                {
                    title,
                    description,
                    file_path: path,
                    file_mimetype: mimetype
                }
            );

            await file.save();
            res.send('File uploaded successfully.');
        }
        catch (error) { res.status(400).send('Error while uploading file. Try again later.'); }
    };

const getAllFiles = async (_req, res) =>
    {
        try
        {
            const files = await File.find({});
            const sortedByCreationDate = files.sort( (a, b) => b.createdAt - a.createdAt );
            res.send(sortedByCreationDate);
        }
        catch (error) { res.status(400).send('Error while getting list of files. Try again later.'); };
    };

const downloadAFile = async (req, res) =>
    {
        try
        {
            const file = await File.findById(req.params.id);
            res.set({ 'Content-Type': file.file_mimetype });
            res.sendFile(path.join(__dirname, '..', '..', file.file_path));
        }
        catch (error) { res.status(400).send('Error while downloading file. Try again later.'); };
    };

module.exports = { saveFileData, getAllFiles, downloadAFile };