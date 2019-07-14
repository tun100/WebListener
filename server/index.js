const Koa = require('koa')
const app = new Koa()
const _ = require('lodash')
const moment = require('moment')
const qs = require('querystring');

app.use(async ctx => {
  if ((_.startsWith(ctx.path), '/login')) {
  }
})

app.listen(3000)