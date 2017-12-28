"use strict";
class GetPagesMessage {
    constructor() {
        this.urls = [];
    }

    static validateUrl(url) {
        if (!url) {
            throw new Error("URL is mandatory");
        }
        // TODO: Add regex to validator

        return true;
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
    function createGetPageMessage() {
        return new GetPagesMessage();
    }

    return {
        createGetPageMessage
    };
}

const factory = messageFactory();
Object.freeze(factory);

export default factory;