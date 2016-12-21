//var restaurant = {
//    name,
//    business,
//    days = [
//        {
//            date,
//            lunches = [
//                {
//                    name,
//                    price,
//                    ingr
//                }
//            ]
//        }
//    ]
//};

function matchDate(string) {
    var date = string.split(" ")[1];
    date = date.split(".");
    var currentmonth = new Date().getMonth();
    var year = new Date().getFullYear();
    if (currentmonth === 11 && date[1] === 0) {
        year++;
    }
    return new Date(year + '-' + date[1] + '-' + date[0]);
}

function format(_id, data) {
    var restaurant = {};
    restaurant._id = _id;
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
        menus[i].date = matchDate(menu.date);
        var lunch = [];
        menus[i].lunch = lunch;

        var j = 0;
        menu.data.forEach(function (lunchdata) {
            lunch[j] = {};
            lunch[j].name = lunchdata.name;
            lunch[j].price = lunchdata.price.name;
            lunch[j].ingr = lunchdata.meta[1];
            j++;
        });
        i++;
    });
    return restaurant;
}

module.exports.format = format;
