const {getModels} = require('node-car-api');
var fs = require('fs');
const {getBrands} = require('node-car-api');

async function getcars(){
    const brands = await getBrands();
    brands.forEach(async function(element, index, array) {

        var models = await getModels(element);
        console.log(models)
        var json = "";
        if(index ==0)
        {

        json = "["+JSON.stringify(models)+", ";
        }
        else if (index == brands.length) {

            json = SON.stringify(models)+"]";
        }
        else {
            json = JSON.stringify(models)+", ";
        }
        fs.appendFileSync('../../models.json', json, 'utf8', (err) => {
	  if (err) throw err;

	});
        });
}

getcars();
module.exports.getcars = getcars;
