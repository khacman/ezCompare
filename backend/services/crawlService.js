"use strict";
const domCache = new Map();
const requestP = require("request-promise-native");

function createRequest(url) {
    return requestP(url);
}

function crawService() {

    function crawl(urls) {
        const crawlReqs = [];
        urls.forEach(url => {
            crawlReqs.push(createRequest(url));
        });

        return Promise.all(crawlReqs).then(doms => {
            return {
                documents: doms
            };
        });
    }

    return {
        crawl
    };
}

const service = crawService();
Object.freeze(service);

module.exports = service;