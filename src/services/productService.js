import messageFactory from "./messageFactory";
import {PhoneDomAdapter} from "../models/Phone";
import {config} from "../config";

const domCache = new Map();

function productService() {

    function getProducts(urls) {
        const productList = [];
        let requestUrls = [];
        let cachedUrls = [];
        urls.forEach(url => {
            if (domCache.has(url)) {
                cachedUrls.push(url);
            } else {
                requestUrls.push(url);
            }
        });

        if (requestUrls.length === 0) { // All requests are cached. No request to server required
            return new Promise(resolve => {
                cachedUrls.forEach(url => {
                    productList.push(domCache.get(url));
                });
                resolve(productList);
            });
        } else {
            const payload = messageFactory.createGetPageMessage(requestUrls);
            const reqOptions = {
                method: "POST",
                headers: new Headers({"Content-Type": "application/json"}),
                body: payload.toString()
            };
            return fetch(config.apiUrl, reqOptions).then((response) => {
                return response.json();
            }).then((data) => {
                const parser = new DOMParser();
                const docs = data.documents.map(doc => parser.parseFromString(doc, "text/html"));
                docs.forEach((doc, i) => {
                    const phone = new PhoneDomAdapter(doc);
                    domCache.set(requestUrls[i], phone); // cache result
                    productList.push(phone);
                });
                // Add cached products to result
                cachedUrls.forEach(url => {
                    productList.push(domCache.get(url));
                });

                return productList;
            });
        }
    }

    return {
        getProducts
    };
}

const service = productService();
Object.freeze(service);

export default service;