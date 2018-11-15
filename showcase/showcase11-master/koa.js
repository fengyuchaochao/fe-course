
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  console.log(1); // 1
  await next(); // 2
  console.log(2); // 8
});

app.use(async (ctx, next) => {
  console.log(3); // 3
  await new Promise((resolve => {
    setTimeout(resolve, 300);
  })); // 4
  
  await next(); // 5
  console.log(4); // 7
});

// app.use(require('./koa-error'))

// process.on('unhandledRejection', (err) => {
//   console.error(`unhandledRejection: ${err.message}, stack: ${err.stack}`);
// });

// process.on('uncaughtException', (err) => {
//   console.error(`uncaughtException: ${err.message}, stack: ${err.stack}`);
// });

app.use(async (ctx, next) => {
  // 6
  ctx.body = 'Hello World';
  // throw new Error('hehe')
});


app.listen(3000);
