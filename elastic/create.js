var client = require('./connection.js');
//create _index
client.indices.create({
  index: 'model'
},function(err,resp,status) {
  if(err) {
    console.log(err);
  }
  else {
    console.log("create",resp);
  }
});
