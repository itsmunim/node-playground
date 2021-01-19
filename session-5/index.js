const { bootstrap } = require('./core');
const middlewares = require('./common/middlewares');
const { tinydb } = require('./common/databases'); // or could import lowdb
const apiConfig = require('./api');

bootstrap(apiConfig, [middlewares.dbProvider.includeDatabase(tinydb)]); // could pass lowdb as well
