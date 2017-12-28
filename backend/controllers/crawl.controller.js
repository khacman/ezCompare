"use strict";

function getPageDom(req, res, next) {
    console.log(req.body);
    let result = {
        status: "success"
    };
    res.json(result);
}

module.exports = {
    getPageDom
};