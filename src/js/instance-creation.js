var products = TAFFY();
var manufacturers = TAFFY();
var retailers = TAFFY();

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
man.location = {latitude: 19.089713, longitude: 72.862236};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Badgerconn Electronics";
man.location = {latitude: 22.324489, longitude: 114.173335};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "Orangutan Display Glasses";
man.location = {latitude: 2*(Math.random()-0.5)*180, longitude: 2*(Math.random()-0.5)*90};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "NextGen LED Display Technologies";
man.location = {latitude: 2*(Math.random()-0.5)*180, longitude: 2*(Math.random()-0.5)*90};
manufacturers.insert(man);

var prod = new Product();
prod.name = "8 GB DDR3 RAM";
prod.type = "electronics.computers.components.memory";
prod.id = "1236";
prod.manufacturer = manufacturers({name: "Mike's Mouse and Computer Supply"}).first();
products.insert(prod);

prod = new Product();
prod.name = "13\" Display Glass";
prod.type = "";
prod.id = "";
prod.manufacturer = manufacturers({name: "Orangutan Display Glasses"});
products.insert(prod);

prod = new Product();
prod.name = "13\" LED Display Module";
prod.id = "";
prod.type = "";
prod.manufacturer = manufacturers({name: "NextGen LED Display Technologies"});
products.insert(prod);

prod = new Product();
prod.name = "13\" Display";
prod.type = "electronics.computers.components.displays";
prod.id = "1230";
prod.manufacturer = manufacturers({name: "Crystal Clear Displays"}).first();
prod.components.push(products({name: "13\" Display Glass"}).first());
prod.components.push(products({name: "13\" LED Display Module"}).first());
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
prod.manufacturer = manufacturers({name: "Mapple Computers"}).first();
prod.components.push(products({name: "13\" Display"}).first());
prod.components.push(products({name: "8 GB DDR3 RAM"}).first());
prod.components.push(products({name: "2.8 GHz e7 Processor"}).first());
products.insert(prod);

prod = new Product();
prod.name = "MapBook 15\"";
prod.type = "electronics.computers.laptop";
prod.id = "1235";
prod.manufacturer = manufacturers({name: "Badgerconn Electronics"}).first();
prod.components.push(products({name: "15\" Display"}).first());
prod.components.push(products({name: "8 GB DDR3 RAM"}).first());
prod.components.push(products({name: "2.8 GHz e7 Processor"}).first());
products.insert(prod);