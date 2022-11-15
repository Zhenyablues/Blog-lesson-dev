const path = require('path');

const createPath = (page) => path.join(__dirname, '../views', `${page}.ejs`);

module.exports = createPath; 