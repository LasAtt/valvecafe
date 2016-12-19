//var restaurant = {
//    name,
//    business,
//    days = [
//        {
//            date,
//            lunches = [
//                name,
//                price,
//                ingr
//            ]
//        }
//    ]
//};

function formatdata(data) {
    var restaurant = {};
    restaurant.name = data.information.restaurant;
    restaurant.business = [];
    menus = [];
    restaurant.menus = menus;

    var i = 0;
    data.data.forEach(function (menu) {
        if (menu.data.length === 0) {
            return;
        }
        menus[i] = {}
        menus[i].date = menu.date;
        var lunch = [];
        menus[i].lunch = lunch;
        
        var j = 0;
        menu.data.forEach(function (lunchdata) {
            lunch[j] = {};
            lunch[j].name = lunchdata.name;
            lunch[j].price = lunchdata.price.name;
            j++;
        });
        i++;
    });
    return restaurant;
}

module.exports.formatdata = formatdata;
