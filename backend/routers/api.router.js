"use strict";
const express = require("express");
const router = express.Router();
const crawlCtrl = require("../controllers/crawl.controller");

/* GET home page. */
router.get("/", (req, res) => {
    res.send("EzCompare API");
});
router.post("/getPages", crawlCtrl.getPageDom);

module.exports = router;
