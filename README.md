# Mern Drag 'n' Drop Files

A full stack app capable of exchanging files with drag and drop for uploads.

# Run the app

0. Add an .env file in config directory of server/src with variables shown in the config.env.example
1. Open two terminals.
2. cd into client and server directory in each terminal.
3. Install packages for both client and server `npm install`.
4. Run client `npm run client`.
5. Run server `npm run server`.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Description

Client runs on port 3000 and files to server on port 5000.\
Server saves the file in local disk in the 'files' directory of root directory and saves the file data in mongodb.\
The files saved on server can be accessed via '/files' url in the client.