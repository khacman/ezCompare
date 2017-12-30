import messageFactory from "./messageFactory";
import {PhoneDomAdapter} from "../models/Phone";
import {config} from "../config";

function productService() {

    function getProducts(urls) {

        const payload = messageFactory.createGetPageMessage(urls);
        let productList = [];

        const reqOptions = {
            method: "POST",
            headers: new Headers({"Content-Type": "application/json"}),
            body: payload.toString()
        };

        return fetch(config.apiUrl, reqOptions).then((response) => {
            return response.json();
        }).then((data) => {

            const parser = new DOMParser();
            // const doc = parser.parseFromString(data.documents[0], "text/html");
            const docs = data.documents.map(doc => parser.parseFromString(doc, "text/html"));
            docs.forEach(doc => {
                productList.push(new PhoneDomAdapter(doc));
            });
            return productList;
        });
    }

    return {
        getProducts
    };
}

const service = productService();
Object.freeze(service);

export default service;