var fs = require('fs');
var client = require('./connection.js');


fs.readFile("../models.json", 'utf8', function (err, data) {
	  if (err) throw err;
	  var models = JSON.parse(data);
    //console.log(models);
    models.forEach(brand =>{

      for(var i =0; i< brand.length;i++){
          client.index({
          index: 'model',
          type: 'model',
          id: i,
          body: {
            brand:brand[i].brand,
            model:brand[i].model,
            volume:brand[i].volume,
            uuid:brand[i].uuid,
            name:brand[i].name
          }
        }, function (error, response) {

        });
  }
      /*
      for(var i =0; i< brand.length;i++){
        var myBody =  [index: {_index: 'model', _type: 'model', _id: i} ,
        {
          "brand":brand[i].brand,
          "model":brand[i].model,
          "volume":brand[i].volume,
          "uuid":brand[i].uuid,
          "name":brand[i].name
        }];
        client.bulk({
    index: 'model',
    type: 'model',
    body: myBody
  });
}*/
    });

});
