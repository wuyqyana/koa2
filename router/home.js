const Router = require('koa-router');
const {query} = require('../utils/db.js');
const home = new Router();

home.get('/', async (ctx) => {
    let data = await query('select * from users')
    ctx.body = data;
})

module.exports = home