module.exports = function(req, res) {
    var date = new Date(req.params.date);
    var query = {'menus.date': date};
    req.collection.find(
                      query,
                      {fields: {_id: 1, areacode: 1, menus: 1}
                      , orderBy: {_id: 1}}
                    ).then(function (result) {
                        result.forEach(function(restaurant){
                          restaurant.menus = restaurant.menus.filter(function(menuitem){
                            return menuitem.date.getTime() === date.getTime();
                          });
                        });
                        res.send(result);
                      });
}
