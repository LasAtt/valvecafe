const deasync = require('deasync');
const request = require('request');
const util = require('./util')

const exactum_id = 11;
const chemicum_id = 10;

var exactum_data = {};

request(util.buildRequest('restaurant/' + exactum_id), function (error, response, body) {
    if (!error && response.statusCode === 200) {
        exactum_data = body;
    }
});



var chemicum_data = {};

request(util.buildRequest('restaurant/' + chemicum_id), function (error, response, body) {
    if (!error && response.statusCode === 200) {
        chemicum_data = body;
    }
});

function exactum() {
    return exactum_data;
}

function chemicum() {
    return chemicum_data;
}

module.exports.exactum = exactum;
module.exports.chemicum = chemicum;