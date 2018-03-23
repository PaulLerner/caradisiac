const express        = require('express');
const app            = express();
const port = 9292;

app.listen(port, () => {
  console.log('We are live on ' + port);
});

require('./app/routes')(app, {});
