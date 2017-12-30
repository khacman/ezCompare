"use strict";
const servers = {
    local: "http://localhost:5000/getPages",
    aws: "https://pmcivzfj3j.execute-api.ap-southeast-1.amazonaws.com/prod/getPages"
};

export const config = {
    apiUrl: servers.local
};