const Router = require('koa-router');
const router = new Router();
const home = require('./home')
const list = require('./list')
const user = require('./user')
const error404 = require('./error404')

router.use('/home', home.routes(), home.allowedMethods());
router.use('/list', list.routes(), list.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());
router.use('/error404', error404.routes(), error404.allowedMethods());
router.redirect('/', '/home');

module.exports = router;