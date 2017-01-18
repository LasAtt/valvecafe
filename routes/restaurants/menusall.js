
module.exports = function (req, res) {
    var date = new Date();
    if (req.query.date) {
        console.log("hello");
        date = new Date(req.query.date);
    }
    var query = {'menus.date': date};
    req.collection.find(query, {sort: {_id: 1}, fields: {_id: 1, name: 1}})
            .then(function (result) {
                result.forEach(function (restaurant) {
                    restaurant.menus = restaurant.menus.filter(function (value) {
                        return value.date.getTime() === query['menus.date'].getTime();
                    });
                });
                res.send(result);
            });
};


