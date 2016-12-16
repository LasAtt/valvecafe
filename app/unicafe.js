const deasync = require('deasync');
const request = require('request');
const util = require('./util')

const exactum_id = 11;
const chemicum_id = 10;

var exactum_data = {data: "kek"};
console.log(exactum_data);

function exactum() {
    return exactum_data;
}

module.exports = function () {
    request.get(util.buildRequest('restaurant/' + exactum_id, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            exactum_data = body;
            console.log(body);
        }
    }));

}
module.exports.exactum = exactum;