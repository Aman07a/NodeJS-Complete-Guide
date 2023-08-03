const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);
