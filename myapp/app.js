const express = require('express');
const app = express();
const cors = require('cors');
const port = 5500;

// Middleware to parse JSON request bodies
app.use(cors());
app.use(express.json());

// Store the received message globally (or use a database for persistent storage)
let receivedData = {};

app.post('/submit', (req, res) => {
    const data = req.body;
    receivedData = data; // Store the received data
    res.json({ message: 'Data received', data: data });
    console.log("1 suc");
});

// GET endpoint to send the received data
app.get('/abc', (req, res) => {
    res.json(receivedData); // Send the stored data as JSON
    console.log("2 suc");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
