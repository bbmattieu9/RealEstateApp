const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 9001;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">Add Product</button></form>'
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello Real Estate Lovers!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server runs on PORT ${PORT}`);
});
