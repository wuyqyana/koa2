const Koa = require('koa2');
const router = require('./router/index')
const cors = require('koa2-cors')
const static = require('koa-static')
const path = require('path')


const app = new Koa();
const port = 9000;

app.use(cors());

// 获取静态资源文件夹
app.use(static(path.join(__dirname +'/assets')));

// 匹配不到页面的全部跳转去404
app.use(async (ctx, next) => {
  await next();
  if (parseInt(ctx.status) === 404) {
      ctx.response.redirect("/error404")
  }
})

app.use(router.routes(), router.allowedMethods());

app.listen(port, ()=>{
    console.log('Server is running at http://localhost:' + port);
})