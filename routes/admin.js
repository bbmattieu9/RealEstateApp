const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();


router.get("/add-apartment", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-apartment.html'));
  });
  
  router.post("/add-apartment", (req, res, next) => {
    console.log(req.body);
    res.redirect("/");
  });


module.exports = router;