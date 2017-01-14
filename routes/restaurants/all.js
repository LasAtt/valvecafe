module.exports = function(req, res) {
    req.collection.find({}, {sort: {_id: 1}, fields: {_id:1, name: 1}})
              .then(function(result) {
                res.send(result);
              });
};
