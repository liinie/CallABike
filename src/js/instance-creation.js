
/*
prod = new Product();
prod.name                               = "";
prod.manufacturer = manufacturers({name:  ""}).first();
prod.components.push(products({name:      ""}).first());
prod.carbonFootprint                    = ;
prod.price.productPrice                 = ;
prod.price.energyCosts                  = ;
prod.price.manufacturingCosts           = ;
prod.price.materialCosts                = ;
products.insert(prod);

man = new Manufacturer();
man.name =     "";
man.setAddress("");
man.workingConditions.employmentProtection  = ;
man.workingConditions.salery                = ;
man.workingConditions.workingHours          = ;
manufacturers.insert(man);
*/


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
man.name = "Steffens zuhause";
man.setAddress("Jämeräntaival 5, 02150 Espoo, Finland");
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
man.location = {latitude: 55.747570, longitude: 37.640134};
manufacturers.insert(man);

man = new Manufacturer();
man.name = "NextGen LED Display Technologies";
man.location = {latitude: 47.909718, longitude: 106.920067};
manufacturers.insert(man);

var prod = new Product();
prod.name = "8 GB DDR3 RAM";
prod.type = "electronics.computers.components.memory";
prod.manufacturer = manufacturers({name: "Mike's Mouse and Computer Supply"}).first();
products.insert(prod);

prod = new Product();
prod.name = "13\" Display Glass";
prod.type = "";
prod.manufacturer = manufacturers({name: "Orangutan Display Glasses"}).first();
products.insert(prod);

prod = new Product();
prod.name = "13\" LED Display Module";
prod.type = "";
prod.manufacturer = manufacturers({name: "NextGen LED Display Technologies"}).first();
products.insert(prod);

prod = new Product();
prod.name = "13\" Display";
prod.type = "electronics.computers.components.displays";
prod.manufacturer = manufacturers({name: "Crystal Clear Displays"}).first();
prod.components.push(products({name: "13\" Display Glass"}).first());
prod.components.push(products({name: "13\" LED Display Module"}).first());
products.insert(prod);

prod = new Product();
prod.name = "15\" Display";
prod.type = "electronics.computers.components.displays";
prod.manufacturer = manufacturers({name: "Crystal Clear Displays"}).first();
products.insert(prod);

prod = new Product();
prod.name = "2.8 GHz e7 Processor";
prod.type = "electronics.computers.components.processors";
prod.manufacturer = manufacturers({name: "HighSpeed Processors"}).first();
products.insert(prod);

prod = new Product();
prod.name = "MapBook 13\"";
prod.type = "electronics.computers.laptops";
prod.manufacturer = manufacturers({name: "Mapple Computers"}).first();
prod.components.push(products({name: "13\" Display"}).first());
prod.components.push(products({name: "8 GB DDR3 RAM"}).first());
prod.components.push(products({name: "2.8 GHz e7 Processor"}).first());
products.insert(prod);

prod = new Product();
prod.name = "MapBook 15\"";
prod.type = "electronics.computers.laptop";
prod.manufacturer = manufacturers({name: "Badgerconn Electronics"}).first();
prod.components.push(products({name: "15\" Display"}).first());
prod.components.push(products({name: "8 GB DDR3 RAM"}).first());
prod.components.push(products({name: "2.8 GHz e7 Processor"}).first());
products.insert(prod);

// ------------------------------------------------------ //


man = new Manufacturer();
man.name =     "Albert Hejin";
man.setAddress("De Katsbogten, Tilburg, Netherlands");
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);


prod = new Product();
prod.name                               = "Carrots";
prod.manufacturer = manufacturers({name:  "Albert Hejin"}).first();
prod.carbonFootprint                    = 10;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.20;
prod.price.manufacturingCosts           = 0.10;
prod.price.materialCosts                = 0.10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Molkerei Weihenstephan";
man.setAddress("Milchstraße 1A, 85354 Freising, Germany");
man.workingConditions.employmentProtection  = 9;
man.workingConditions.salery                = 8;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Milk";
prod.manufacturer = manufacturers({name:  "Molkerei Weihenstephan"}).first();
prod.carbonFootprint                    = 30;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.10;
prod.price.manufacturingCosts           = 0.10;
prod.price.materialCosts                = 0.10;
products.insert(prod);

man = new Manufacturer();
man.name =     "La Medesanese";
man.setAddress("Via Carnevala 21/A, 43014 Medesano, Italy ");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Parmigiano Reggiano";
prod.manufacturer = manufacturers({name:  "La Medesanese"}).first();
prod.components.push(products({name:      "Milk"}).first());
prod.carbonFootprint                    = 50;
prod.price.productPrice                 = 15;
prod.price.energyCosts                  = 1;
prod.price.manufacturingCosts           = 2;
prod.price.materialCosts                = 1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Thomy les Sauces";
man.setAddress("4 La Rochette, 03340 La Ferté-Hauterive, France");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Bechamel";
prod.manufacturer = manufacturers({name:  "Thomy les Sauces"}).first();
prod.components.push(products({name:      "Milk"}).first());
prod.carbonFootprint                    = 35;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.5;
prod.price.manufacturingCosts           = 0.2;
prod.price.materialCosts                = 1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Cereales Inc.";
man.setAddress("Rue de la Vallee Saint-Ulrich, Barr, France");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Grain";
prod.manufacturer = manufacturers({name:  "Cereales Inc."}).first();
prod.carbonFootprint                    = 5;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "De Cecco";
man.setAddress("Via Nazionale, 4B, Fara San Martino CH, Italy");
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Lasagne Pasta";
prod.manufacturer = manufacturers({name:  "De Cecco"}).first();
prod.components.push(products({name:      "Grain"}).first());
prod.carbonFootprint                    = 10;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.3;
prod.price.manufacturingCosts           = 0.3;
prod.price.materialCosts                = 1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Zwiebelhof";
man.setAddress("Buchenweg 6, 73488 Ellenberg, Germany");
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Onion";
prod.manufacturer = manufacturers({name:  "Zwiebelhof"}).first();
prod.carbonFootprint                    = 5;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "CASI";
man.setAddress("Calle Tomás Aznar Domenech, 30, 03007 Alacant, Alicante, Spain");
man.workingConditions.employmentProtection  = 5;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);


prod = new Product();
prod.name                               = "Tomato";
prod.manufacturer = manufacturers({name:  "CASI"}).first();
prod.carbonFootprint                    = 10;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.3;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Bonduelle";
man.setAddress("Avenida Les Germaníes 49, 46291 Benimodo, Spain");
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Tomato Sauce";
prod.manufacturer = manufacturers({name:  "Bonduelle"}).first();
prod.components.push(products({name:      "Tomato"}).first());
prod.carbonFootprint                    = 15;
prod.price.productPrice                 = 3;
prod.price.energyCosts                  = 0.2;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 2;
products.insert(prod);


man = new Manufacturer();
man.name =     "Texas Longhorn";
man.setAddress("2139 San Jacinto Boulevard, Austin, Texas, USA");
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Beef";
prod.manufacturer = manufacturers({name:  "Texas Longhorn"}).first();
prod.carbonFootprint                    = 400;
prod.price.productPrice                 = 30;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Shuanghui";
man.setAddress("Hongkong East Road, Qingdao, Shandong, China");
man.location.latitude = 35.956997;
man.location.longitude = 119.36065;

man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Pork";
prod.manufacturer = manufacturers({name:  "Shuanghui"}).first();
prod.carbonFootprint                    = 350;
prod.price.productPrice                 = 35;
prod.price.energyCosts                  = 8;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name ="Smithfield Foods";
man.setAddress("200 Commerce St, Smithfield, VA 23430, USA");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Minced Meat";
prod.manufacturer = manufacturers({name:  "Smithfield Foods"}).first();
prod.components.push(products({name:      "Beef"}).first());
prod.components.push(products({name:      "Pork"}).first());
prod.carbonFootprint                    = 800;
prod.price.productPrice                 = 5;
prod.price.energyCosts                  = 0.4;
prod.price.manufacturingCosts           = 0.3;
prod.price.materialCosts                = 2;
products.insert(prod);

man = new Manufacturer();
man.name = "LIDL";
man.setAddress("Stiftsbergstraße 1, 74172 Neckarsulm, Germany");
man.location.latitude = 49.1846;
man.location.longitude = 9.2358;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Lasagne";
prod.manufacturer = manufacturers({name:  "LIDL"}).first();
prod.components.push(products({name:      "Minced Meat"}).first());
prod.components.push(products({name:      "Tomato Sauce"}).first());
prod.components.push(products({name:      "Onion"}).first());
prod.components.push(products({name:      "Lasagne Pasta"}).first());
prod.components.push(products({name:      "Bechamel"}).first());
prod.components.push(products({name:      "Parmigiano Reggiano"}).first());
prod.components.push(products({name:      "Carrots"}).first());
prod.carbonFootprint                    = 10;
prod.price.productPrice                 = 10;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 10;
products.insert(prod);