module.exports = function(req, res) {
    const date = new Date(req.params.date);
    req.collection.find(
                      {'menus.date': date},
                      {fields: {_id: 0, business: 0}
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
