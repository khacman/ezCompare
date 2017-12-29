class Product {
    static getProductData(dom) {
        const script = dom.scripts[5].innerText;
        const dataRegex = /(?:dataLayer.push\()({[\d\D]+})(?:\);)/i;
        const parseResult = dataRegex.exec(script);
        if (parseResult) {
            return JSON.parse(parseResult[1]);
        }

        return parseResult;
    }
}

export default Product;