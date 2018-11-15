
var express = require('express');
var app = express();

// app.use((req, res, next) => {
//   try {
//     next();
//   } catch (ex) {
//     rex.send(ex.message);
//   }
// });

app.use((req, res, next) => {
  console.log(1); // 1
  next(); // 2
  console.log(2); // 5
});

app.use((req, res, next) => {
  console.log(3); // 3
  new Promise((resolve => { // 4
    setTimeout(resolve, 300);
  })).then(() => {
    next(); // 6
    console.log(4); // 8
  });
});

app.use(function(req, res) {
  // 7
  res.send('Hello World');
  // throw new Error('hehe');
})

app.listen(3000)