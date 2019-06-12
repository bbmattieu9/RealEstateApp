const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const apartments = [];

router.get("/add-apartment", (req, res, next) => {
  res.render('add-apartment', { pageTitle: 'Add Apartment', path: '/admin/add-apartment' });
  });
  
  router.post("/add-apartment", (req, res, next) => {
    apartments.push({ title: req.body.title })
    res.redirect("/");
  });

exports.routes = router;
exports.apartments = apartments;