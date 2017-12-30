const servers = {
    local: "http://localhost:5000/getPages",
    aws: "https://hrag2hvbg7.execute-api.ap-southeast-1.amazonaws.com/prod/getPages"
};

export const config = {
    apiUrl: servers.aws
};