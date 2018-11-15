// 异常处理
const isDev = /^dev/.test(process.env.NODE_ENV); // 开发环境

module.exports = async function(ctx, next) {
  try {
    await next();
  } catch (err) {
    err = err || new Error('Null or undefined error');

    !err.expose &&
      console.error(`error: ${err.message}, stack: ${err.stack}`);

    ctx.set('Cache-Control', 'no-cache, max-age=0');
    ctx.status = err.status || 500;
    ctx.type = 'application/json';

    let resp = err.response || {};
    ctx.body = {
      code: err.code,
      error: resp.body || err.error,
      message: err.message,
    };

    if (isDev) {
      ctx.body.stack = err.stack;
    }
  }
};
