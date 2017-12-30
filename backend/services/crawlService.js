"use strict";
const domCache = new Map();
const requestP = require("request-promise-native");

function getPage(url) {
    if (domCache.has(url)) { // Get page from cache if existed
        return new Promise(resolve => resolve(domCache.get(url)));
    }

    return requestP(url);
}

function crawService() {
    function crawl(urls) {
        const crawlReqs = [];
        urls.forEach(url => {
            crawlReqs.push(getPage(url));
        });

        return Promise.all(crawlReqs).then(doms => {
            // Caching pages
            process.nextTick(() => {
                urls.forEach((url, i) => {
                    domCache.set(url, doms[i]);
                });
            });

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