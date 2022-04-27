const express = require('express');
const path = require('path');
const app = express();

app.get('/js', (req, res) => {
    res.sendFile(path(__dirname, './public/index.html'))
});

const port = process.env.PORT || 4005;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});