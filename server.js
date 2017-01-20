var express = require('express')
        , monk = require('monk')
        , initdata = require('./util/initdata');

var app = express();
var router = require('./routes/index.js');

var db = monk(process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT+'/valvecafe');

var port = 3000;

initdata(db);
setInterval(initdata, 8640000, db);

app.use(function (req, res, next) {
    req.collection = db.get('restaurants');
    req.visibility = {_id: 1, name: 1, areacode: 1};
    next();
});

app.use('/api', router);

app.listen(port);
