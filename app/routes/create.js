var client = require('./connection.js');
//create _index
function Create() {


    client.indices.create({
      index: 'model2'
    },function(err,resp,status) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("create",resp);
      }
    });
}
Create();
module.exports.Create = Create;
