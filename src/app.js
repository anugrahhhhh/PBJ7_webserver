const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello, Apa Kabar? Selamat datang di API kami!");
});

app.listen(port, () => {
    console.log(`Server berjalan di port ${port}`);
});
