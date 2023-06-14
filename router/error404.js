const Router = require('koa-router');
const error404 = new Router();

error404.get('/', async (ctx) => {
    ctx.body = "访问路径不存在";
})

module.exports = error404;