/*
 * @Author: kael 
 * @Date: 2018-05-10 21:11:34 
 * @Last Modified by: kael
 * @Last Modified time: 2018-05-10 22:07:23
 */

const logger = require('./utils/logger')('index');
logger.info(`Bootstrapping application`);

const Koa = require('koa');
const app = new Koa();

const compress = require('koa-compress')({ flush: 2 });
const conditional = require('koa-conditional-get')();
const bodyparser = require('koa-bodyparser')();
const etag = require('koa-etag')();

app.keys = ['appkeys'];

app
  .use(conditional)
  .use(etag)
  .use(compress)
  .use(bodyparser)

const fs = require('fs');
const path = require('path');
const Router = require('koa-router');
((root = './routers') => {
  fs.readdirSync(root).forEach(filename => {
    let file = path.parse(filename);
    logger.info('load router:', filename);
    if (file.ext.toLowerCase() !== '.js') return;
    const router = new Router({ prefix: `/${file.name}` });
    require(`${root}/${file.name}`)(router);
    app.use(router.routes());
  });
})();

app.listen(3000);

logger.info('Server listening on http://localhost:3000');