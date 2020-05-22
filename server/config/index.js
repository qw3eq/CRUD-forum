const dotenv = require('dotenv');

const envFound = dotenv.config();

if(envFound.error) {
    throw new Error("Could not find .env file");
}

module.exports = {
    port: process.env.PORT,
    dbUrl: process.env.DB_URL,
    clientUrl: process.env.CLIENT_URL,
    
}