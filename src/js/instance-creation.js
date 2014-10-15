var products = TAFFY();
var manufacturers = TAFFY();
var retailers = TAFFY;


var manIdx = -1;
var man = new Manufacturer();
man.name = "Mapple Computers";
man.location = {latitude: 37.445755, longitude: -122.137410};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Mike's Mouse and Computer Supply";
man.location = {latitude: 23.039677, longitude: 113.381848};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Moo Milk Farm";
man.location = {latitude: 51.772651, longitude: 21.787229};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Crystal Clear Displays";
man.location = {latitude: 31.298305, longitude: 121.586616};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "HighSpeed Processors";
man.location = {latitude: 37.380709, longitude: -122.053458};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Badgerconn Electronics";
man.location = {latitude: 22.324489, longitude: 114.173335};
manufacturers.insert(man);

var prodIdx = -1;
var prod = new Product();
prod.name = "8 GB DDR3 RAM";
prod.type = "electronics.computers.components.memory";
prod.id = "1236";
prod.manufacturer = manufacturers({name: "Mike's Mouse and Computer Supply"}).first();
products.insert(prod);

prod = new Product();
prod.name = "13\" Display";
prod.type = "electronics.computers.components.displays";
prod.id = "1230";
prod.manufacturer = manufacturers({name: "Crystal Clear Displays"}).first();
products.insert(prod);

prod = new Product();
prod.name = "15\" Display";
prod.type = "electronics.computers.components.displays";
prod.id = "1233";
prod.manufacturer = manufacturers({name: "Crystal Clear Displays"}).first();
products.insert(prod);

prod = new Product();
prod.name = "2.8 GHz e7 Processor";
prod.type = "electronics.computers.components.processors";
prod.id = "1231";
prod.manufacturer = manufacturers({name: "HighSpeed Processors"}).first();
products.insert(prod);

prod = new Product();
prod.name = "MapBook 13\"";
prod.type = "electronics.computers.laptops";
prod.id = "1234";
prod.manufacturer = manufacturers({name: "Badgerconn Electronics"}).first();
prod.components.push(products[0]);
prod.components.push(products[1]);
prod.components.push(products[3]);
products.insert(prod);

prod = new Product();
prod.name = "MapBook 15\"";
prod.type = "electronics.computers.laptop";
prod.id = "1235";
prod.manufacturer = manufacturers({name: "Badgerconn Electronics"}).first();
prod.components.push(products[0]);
prod.components.push(products[2]);
prod.components.push(products[3]);
products.insert(prod);