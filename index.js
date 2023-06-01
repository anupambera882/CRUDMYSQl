const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');
const app = express();
const port = 3000;

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(route);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})