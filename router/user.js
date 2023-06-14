const Router = require('koa-router');
const user = new Router();
const { login } = require('../controller/user')
const bodyParser = require('koa-bodyparser')

user.use(bodyParser())

user.post('/login', login)

module.exports = user