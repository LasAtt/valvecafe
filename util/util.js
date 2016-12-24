function buildRequest(uri) {
    return {
        uri: uri,
        baseUrl: 'http://hyy-lounastyokalu-production.herokuapp.com/publicapi/',
        method: 'GET',
        json: true
    };
}

module.exports.buildRequest = buildRequest;
