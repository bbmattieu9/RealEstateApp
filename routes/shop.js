const path = require('path');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = require('express').Router();


// const router = express.Router();
const apartments = adminData.apartments;
router.get("/", (req, res, next) => {
    res.render('shop',{prods :apartments, pageTitle:'Shop', path:'/'});
  });

module.exports = router;