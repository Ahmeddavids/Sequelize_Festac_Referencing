// Import Express framework
const express = require('express');
const sequelize = require('./database/sequelize');
const storeRouter = require('./routes/storeRouter');
const productRouter = require('./routes/productRouter');
// Create a PORT
const PORT = 9090;

// Instantiate our Express
const app = express();

app.use(express.json());

app.use(storeRouter);
app.use(productRouter);

const server = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
    }
}

server();

// Set up our sever to listen to PORT
app.listen(PORT, () => {
    console.log(`Server is listening to PORT: ${PORT}`);
})