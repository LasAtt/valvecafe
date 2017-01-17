module.exports = function(req, res) {
    var query = req.query;
    req.collection.find(query, {sort: {_id: 1}, fields: {_id:1, name: 1, areacode: 1}})
              .then(function(result) {
                res.send(result);
              });
};
