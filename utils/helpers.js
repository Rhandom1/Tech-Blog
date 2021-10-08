const Handlebars = require('handlebars');


module.exports = {
    format_time: (date) => {
        return date.toLocaleTimeString();
    }
}