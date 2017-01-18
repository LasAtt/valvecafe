module.exports = function (req, res, next, date) {
    var newdate = new Date(date);
    req.result.menus = req.result.menus.filter(function (value) {
        return value.date.getTime() === newdate.getTime();
    });
    next();
};