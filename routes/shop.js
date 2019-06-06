const path = require('path');

const rootDir = require('../util/path');

const router = require('express').Router();


// const router = express.Router();

router.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });

module.exports = router;