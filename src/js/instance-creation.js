
/*
prod = new Product();
prod.name                               = "";
prod.manufacturer = manufacturers({name:  ""}).first();
prod.components.push(products({name:      ""}).first());
prod.addedCarbonFootprint                    = ;
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


// Lenovo X1 Carbon

man = new Manufacturer();
man.name =     "BKP4 Technologies";
man.setAddress("Rishi Raj Narayan Rd, Bansdroni, Kolkata, West Bengal 700070, Indien");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Battery 6 Cells";
prod.manufacturer = manufacturers({name:  "BKP4 Technologies"}).first();
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 60;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Western Digital";
man.setAddress("Krok Som Bun, Si Maha Phot District, Prachin Buri, Thailand");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "HDD 2 TB";
prod.manufacturer = manufacturers({name:  "Western Digital"}).first();
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 70;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Kingston";
man.setAddress("3588 Hu Tai Lu, Baoshan Qu, Shanghai Shi, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "8GB DDR3 RAM";
prod.manufacturer = manufacturers({name:  "Kingston"}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 3;
prod.price.materialCosts                = 5;
products.insert(prod);

man = new Manufacturer();
man.name =     "Intel Corp.";
man.setAddress("11 Jie Fang Lu Yi Duan, LiJiaTuo, Jinniu Qu, Chengdu Shi, Sichuan Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Core i7 Processor";
prod.manufacturer = manufacturers({name:  "Intel Corp."}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 180;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 20;
products.insert(prod);


man = new Manufacturer();
man.name =     "Quanta Computer Inc.";
man.setAddress("Hougang St, No. 11, Shilin District,Taipei City, Taiwan 111");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Motherboard";
prod.manufacturer = manufacturers({name:  "Quanta Computer Inc."}).first();
prod.components.push(products({name:      "Core i7 Processor"}).first());
prod.components.push(products({name:      "8GB DDR3 RAM"}).first());
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 90;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 10;
products.insert(prod);


man = new Manufacturer();
man.name =     "Amkette";
man.setAddress("40/10, Pocket 40, Kalkaji, New Delhi, India");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Keyboard";
prod.manufacturer = manufacturers({name:  "Amkette"}).first();
prod.addedCarbonFootprint                    = 15;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 5;
products.insert(prod);

man = new Manufacturer();
man.name =     "Cirque";
man.setAddress("2463 South 3850 West, Salt Lake City, USA");
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Trackpad";
prod.manufacturer = manufacturers({name:  "Cirque"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 20;
prod.price.energyCosts                  = 3;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Lenovo Keyboard Inc.";
man.setAddress("2 Qian Jin Xiang, Wuwei Shi, Gansu Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Keyboard Unit";
prod.manufacturer = manufacturers({name:  "Lenovo Keyboard Inc."}).first();
prod.components.push(products({name:      "Keyboard"}).first());
prod.components.push(products({name:      "Trackpad"}).first());
prod.addedCarbonFootprint                    = 5;
prod.price.productPrice                 = 10;
prod.price.energyCosts                  = 0;
prod.price.manufacturingCosts           = 3;
prod.price.materialCosts                = 0;
products.insert(prod);


man = new Manufacturer();
man.name =     "Lenovo Base Inc.";
man.setAddress("26 Si Da Lin Jie, Heilongjiang Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Base Unit";
prod.manufacturer = manufacturers({name:  "Lenovo Base Inc."}).first();
prod.components.push(products({name:      "Keyboard Unit"}).first());
prod.components.push(products({name:      "Motherboard"}).first());
//prod.components.push(products({name:      "Battery 6 Cells"}).first());
//prod.components.push(products({name:      "HDD 2 TB"}).first());
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 30;
prod.price.energyCosts                  = 2;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "B2";
man.setAddress("12F, Tung Nam Commercial Centre, Kowloon, Hongkong, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Webcam";
prod.manufacturer = manufacturers({name:  "B2"}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "NEC Inc.";
man.address = "1 Chome-36-12 Kitashinjuku, Tokio, Japan";
man.location.latitude = 35.697749;
man.location.longitude = 139.691290;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "LCD Panel";
prod.manufacturer = manufacturers({name:  "NEC Inc."}).first();
prod.addedCarbonFootprint                    = 40;
prod.price.productPrice                 = 100;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Lenovo LCD";
man.address = "691 Sahibzada Ajit Singh Nagar, Punjab, India";
man.location.latitude = 30.726084;
man.location.longitude = 76.724062;
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "LCD Unit";
prod.manufacturer = manufacturers({name:  "Lenovo LCD"}).first();
prod.components.push(products({name:      "LCD Panel"}).first());
prod.components.push(products({name:      "Webcam"}).first());
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Lenovo Inc.";
man.address = "test";
man.location.latitude = 48.738752;
man.location.longitude = 9.111401;
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Lenovo Thinkpad X1 Carbon";
prod.manufacturer = manufacturers({name:  "Lenovo Inc."}).first();
prod.components.push(products({name:      "LCD Unit"}).first());
prod.components.push(products({name:      "Base Unit"}).first());
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 1000;
prod.price.energyCosts                  = 100;
prod.price.manufacturingCosts           = 100;
prod.price.materialCosts                = 200;
products.insert(prod);
// ------------------------------------------------------ //


man = new Manufacturer();
man.name =     "Albert Hejin";
man.address = "Romeinse Tijd 2-8, 5053 ET Goirle, Niederlande";
man.location.latitude = 51.531646;
man.location.longitude = 5.071066;
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);


prod = new Product();
prod.name                               = "Carrots";
prod.manufacturer = manufacturers({name:  "Albert Hejin"}).first();
prod.addedCarbonFootprint                    = 10;
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
prod.addedCarbonFootprint                    = 30;
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
prod.addedCarbonFootprint                    = 50;
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
prod.addedCarbonFootprint                    = 35;
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
prod.addedCarbonFootprint                    = 5;
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
prod.addedCarbonFootprint                    = 10;
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
prod.addedCarbonFootprint                    = 5;
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

man = new Manufacturer();
man.name =     "Prezzemoli Inc.";
man.setAddress("Via di Prima Porta, 11, 00188 Roma RM, Italy");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Parsley";
prod.manufacturer = manufacturers({name:  "Prezzemoli Inc."}).first();
prod.addedCarbonFootprint                    = 5;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.2;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Aglidiso";
man.setAddress("50 Avenue de Cassan, 34320 Roujan, France");
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Garlic";
prod.manufacturer = manufacturers({name:  "Aglidiso"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.1;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Insapori Inc.";
//man.address = "Viale Nazioni Unite, 10, 17019 Varazze SV, Italy";
man.location.latitude = 44.360083;
man.location.longitude = 8.577848;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Mixed Herbs";
prod.manufacturer = manufacturers({name:  "Insapori Inc."}).first();
prod.components.push(products({name:      "Parsley"}).first());
prod.components.push(products({name:      "Garlic"}).first());
prod.addedCarbonFootprint                    = 3;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.1;
prod.price.manufacturingCosts           = 0.2;
prod.price.materialCosts                = 0.1;
products.insert(prod);


prod = new Product();
prod.name                               = "Tomato";
prod.manufacturer = manufacturers({name:  "CASI"}).first();
prod.addedCarbonFootprint                    = 10;
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
prod.components.push(products({name:      "Mixed Herbs"}).first());
prod.addedCarbonFootprint                    = 15;
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
prod.addedCarbonFootprint                    = 400;
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
prod.addedCarbonFootprint                    = 350;
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
prod.addedCarbonFootprint                    = 800;
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
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 10;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 10;
products.insert(prod);

