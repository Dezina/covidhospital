const express = require('express');
const path = require('path');
const port = Number(process.env.PORT || 8000);
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index.html')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,  'index.html'));
});

app.listen(() => {
    console.log(`server is runing in http://localhost:${port}`)
});
