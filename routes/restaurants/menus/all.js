module.exports = function(req, res) {
  const _id = req.params._id * 1;
  req.collection.findOne({_id: _id}, {fields: {_id: 0, business: 0}}).then(function (data) {
    res.send(data);
  });
}
