

const {getModels} = require('node-car-api');

var fs = require('fs');
const {getBrands} = require('node-car-api');

async function test(){
    const brands = await getBrands();
    brands.forEach(async function(brand) {
  
        var models = await getModels(brand);
        console.log(models)
    var json = JSON.stringify(models)+", ";
        fs.appendFileSync('./models.json', json, 'utf8', (err) => {
	  if (err) throw err;

	});
        });
}
test();
