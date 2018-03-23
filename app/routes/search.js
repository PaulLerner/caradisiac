var client = require('./connection.js');
var fs = require('fs');

function Query()
{


    client.search({
      "index": 'model',
      "type": 'model',
      "body": {
        "sort":{"volume":{"order":"desc"}},
        "size":10,
        "query": {
          "range" : {
                "volume" : {
                    "gte" : 0
                }
            }
        }
      }
    },function (error, response,status) {
        if (error){
          console.log("search error: "+error);
         //res.send("search error: "+error);
        }
        else {
        console.log("--- Hits ---");
        var jsonPretty = JSON.stringify(response.hits.hits,null,2);
        console.log(jsonPretty);
        fs.writeFile("../../result.json", jsonPretty, 'utf8', (err) => {
    	  if (err) throw err;

        });
    //    res.send("--- Hits ---\n"+jsonPretty);
        }
    });
}
Query();
module.exports.Query = Query;
