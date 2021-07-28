require('dotenv').config({ path: './config/config.env' });

const app = require('./config/app');
const connectToDatabase = require('./config/db');

const initializeServer = async () =>
    {
        await connectToDatabase();
        
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, console.log('Server listening on port 5000'));
    };

initializeServer();