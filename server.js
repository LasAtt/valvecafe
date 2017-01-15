var express = require('express'),
        monk = require('monk'),
        initdata = require('./util/initdata');

var app = express();
var router = require('./routes/index.js');

console.log(process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT);
var db = monk(process.env.MONGO_PORT_27017_TCP_ADDR+':'+process.env.MONGO_PORT_27017_TCP_PORT+'/kumpulamenu');

var port = 3000;

initdata(db);
setInterval(initdata, 8640000, db);

app.use(function (req, res, next) {
    req.collection = db.get('restaurants');
    next();
});


app.use('/api', router);

app.listen(port);
