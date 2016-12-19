const unicafe = require('./app/unicafe')
const formater = require('./app/lunchformater')

function test() {
    var chemicum = unicafe.chemicum();
    var form_che = formater.formatdata(chemicum);
    console.log(form_che);
    console.log(form_che.menus[0].lunch);
}
setTimeout(test, 2000);
