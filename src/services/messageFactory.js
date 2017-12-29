class GetPagesMessage {
    constructor(urls) {
        this.urls = urls;
    }

    add(url) {
        GetPagesMessage.validateUrl(url);

        this.urls.push(url);
        return this;
    }

    toString() {
        return JSON.stringify({
            urls: this.urls
        });
    }
}
function messageFactory() {
    function validateUrl(url) {
        if (!url) {
            throw new Error("URL is mandatory");
        } else {
            // TODO: Add regex to validator
            const urlRegex = /^(?:(http|https):)?(?:\/{0,2})?(?:www.)?(lazada.sg\/)/i;
            const validation = urlRegex.exec(url);
            if (!validation) {
                throw new Error(`Invalid URL: ${url}`);
            }

            return true;
        }
    }

    function createGetPageMessage(urls) {
        for (let url of urls) {
            validateUrl(url);
        }

        return new GetPagesMessage(urls);
    }

    return {
        createGetPageMessage
    };
}

const factory = messageFactory();
Object.freeze(factory);

export default factory;