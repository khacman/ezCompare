"use strict";
const crawlService = require("../services/crawlService");

function getPageDom(req, res, next) {
    console.log(req.body);
    crawlService.crawl(req.body.urls).then(result => {
        res.json(result);
    });
}

module.exports = {
    getPageDom
};