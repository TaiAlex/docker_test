const express = require('express');
const cors = require('cors');

//constants
const PORT = 8080;
const HOST = '139.99.72.124';

//App
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send({
        "Course": [
            "HTML",
            "CSS",
            "Docker",
            "OOP"
        ]
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);