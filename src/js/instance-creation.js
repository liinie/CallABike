// this script creates all our products and adds them to the taffy database
var products = TAFFY();
var manufacturers = TAFFY();
var retailers = TAFFY();

// Lenovo X1 Carbon
man = new Manufacturer();
man.name =     "BKP4 Technologies";
man.picture = "bkp4.png";
man.setAddress("Rishi Raj Narayan Rd, Bansdroni, Kolkata, West Bengal 700070, Indien");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Battery 6 Cells";
prod.picture = "thinkpad/battery.png";
prod.manufacturer = manufacturers({name:  "BKP4 Technologies"}).first();
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 60;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Western Digital";
man.picture = "wd.png";
man.setAddress("Krok Som Bun, Si Maha Phot District, Thailand");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "HDD 2 TB";
prod.picture = "thinkpad/hdd.png";
prod.manufacturer = manufacturers({name:  "Western Digital"}).first();
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 70;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Kingston";
man.picture = "kingston.png";
man.setAddress("3588 Hu Tai Lu, Baoshan Qu, Shanghai Shi, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "8GB DDR3 RAM";
prod.picture = "thinkpad/ram.png";
prod.manufacturer = manufacturers({name:  "Kingston"}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 3;
prod.price.materialCosts                = 5;
products.insert(prod);

man = new Manufacturer();
man.name =     "Intel Corp.";
man.picture = "intel.png";
man.setAddress("11 Jie Fang Lu Yi Duan, Chengdu Shi, Sichuan Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Core i7 Processor";
prod.picture = "thinkpad/processor.png";
prod.manufacturer = manufacturers({name:  "Intel Corp."}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 180;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 20;
products.insert(prod);


man = new Manufacturer();
man.name =     "Quanta Computer Inc.";
man.picture = "quanta.png";
man.setAddress("Hougang St. 11, Shilin District, Taipei City, Taiwan");
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Motherboard";
prod.picture = "thinkpad/motherboard.png";
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
man.picture = "amkette.png";
man.setAddress("40/10 Pocket 40, Kalkaji, New Delhi, India");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Keyboard";
prod.picture = "thinkpad/keyboard.png";
prod.manufacturer = manufacturers({name:  "Amkette"}).first();
prod.addedCarbonFootprint                    = 15;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 5;
products.insert(prod);

man = new Manufacturer();
man.name =     "Cirque";
man.picture = "cirque.png";
man.setAddress("2463 South 3850 West, Salt Lake City, USA");
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Trackpad";
prod.picture = "thinkpad/trackpad.png";
prod.manufacturer = manufacturers({name:  "Cirque"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 20;
prod.price.energyCosts                  = 3;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Lenovo Keyboard Inc.";
man.picture = "lenovo.png";
man.setAddress("2 Qian Jin Xiang, Wuwei Shi, Gansu Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Keyboard Unit";
prod.picture = "thinkpad/keyboard_unit.png";
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
man.picture = "lenovo.png";
man.setAddress("26 Si Da Lin Jie, Heilongjiang Sheng, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Base Unit";
prod.picture = "thinkpad/base_unit.png";
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
man.picture = "b2.png";
man.setAddress("12F Tung Nam Commercial Centre, Kowloon, Hongkong, China");
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 3;
man.workingConditions.workingHours          = 3;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Webcam";
prod.picture = "thinkpad/webcam_and_microphone_combo_card.png";
prod.manufacturer = manufacturers({name:  "B2"}).first();
prod.addedCarbonFootprint                    = 20;
prod.price.productPrice                 = 40;
prod.price.energyCosts                  = 5;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "NEC Inc.";
man.picture = "nec.png";
man.address = "1 Chome-36-12 Kitashinjuku, Tokio, Japan";
man.location.latitude = 35.697749;
man.location.longitude = 139.691290;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "LCD Panel";
prod.picture = "thinkpad/lcd_panel.png";
prod.manufacturer = manufacturers({name:  "NEC Inc."}).first();
prod.addedCarbonFootprint                    = 40;
prod.price.productPrice                 = 100;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 10;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Lenovo LCD";
man.picture = "lenovo.png";
man.address = "691 Sahibzada Ajit Singh Nagar, Punjab, India";
man.location.latitude = 30.726084;
man.location.longitude = 76.724062;
man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 4;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "LCD Unit";
prod.picture = "thinkpad/lcd_unit.png";
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
man.picture = "lenovo.png";
man.address = "Hevosenkenkae 3, 02600 Espoo, Finland";
man.location.latitude = 60.217939;
man.location.longitude = 24.814446;
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Lenovo Thinkpad X1 Carbon";
prod.picture = "thinkpad/lcd_unit.png";
prod.manufacturer = manufacturers({name:  "Lenovo Inc."}).first();
prod.components.push(products({name:      "LCD Unit"}).first());
prod.components.push(products({name:      "Base Unit"}).first());
prod.addedCarbonFootprint                    = 20.23456589234567;
prod.price.productPrice                 = 1000;
prod.price.energyCosts                  = 100;
prod.price.manufacturingCosts           = 100;
prod.price.materialCosts                = 200;
products.insert(prod);
// ------------------------------------------------------ //


man = new Manufacturer();
man.name =     "Albert Hejin";
man.picture = "albert.png";
man.address = "Romeinse Tijd 2-8, 5053 ET Goirle, Niederlande";
man.location.latitude = 51.531646;
man.location.longitude = 5.071066;
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);


prod = new Product();
prod.name                               = "Carrots";
prod.picture = "lasagne/carrots.png";
prod.manufacturer = manufacturers({name:  "Albert Hejin"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.20;
prod.price.manufacturingCosts           = 0.10;
prod.price.materialCosts                = 0.10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Molkerei Weihenstephan";
man.picture = "weihenstephan.png";
man.address = "Milchstrasse 1A, 85354 Freising, Germany";
man.location.latitude = 48.379353;
man.location.longitude = 11.731606;
man.workingConditions.employmentProtection  = 9;
man.workingConditions.salery                = 8;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Milk";
prod.picture = "lasagne/milk.png";
prod.manufacturer = manufacturers({name:  "Molkerei Weihenstephan"}).first();
prod.addedCarbonFootprint                    = 30;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.10;
prod.price.manufacturingCosts           = 0.10;
prod.price.materialCosts                = 0.10;
products.insert(prod);

man = new Manufacturer();
man.name =     "La Medesanese";
man.picture = "lamedesanese.png";
man.address = "Via Carnevala 21/A, 43014 Medesano, Italy";
man.location.latitude = 44.763349;
man.location.longitude = 10.129547;
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Parmigiano Reggiano";
prod.picture = "lasagne/parmigiano.png";
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
man.picture = "thomy.png";
man.address = "4 La Rochette, 03340 La Ferte-Hauterive, France";
man.location.latitude = 46.400414;
man.location.longitude = 3.335744;
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Bechamel";
prod.picture = "lasagne/bechamel.png";
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
man.picture = "cereales.png";
man.address = "Rue de la Vallee Saint-Ulrich, Barr, France";
man.location.latitude = 48.407148;
man.location.longitude = 7.417145;
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Grain";
prod.picture = "lasagne/grain.png";
prod.manufacturer = manufacturers({name:  "Cereales Inc."}).first();
prod.addedCarbonFootprint                    = 5;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "De Cecco";
man.picture = "dececco.png";
man.address = "Via Nazionale, 4B, Fara San Martino CH, Italy";
man.location.latitude = 42.092088;
man.location.longitude = 14.209575;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Lasagne Pasta";
prod.picture = "lasagne/lasagnepasta.png";
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
man.picture = "zwiebelhof.png";
man.address = "Buchenweg 6, 73488 Ellenberg, Germany";
man.location.latitude = 49.012595;
man.location.longitude = 10.210801;
man.workingConditions.employmentProtection  = 8;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Onion";
prod.picture = "lasagne/onion.png";
prod.manufacturer = manufacturers({name:  "Zwiebelhof"}).first();
prod.addedCarbonFootprint                    = 5;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Prezzemoli Inc.";
man.picture = "prezzemoli.png";
man.address = "Via di Prima Porta 11, 00188 Roma, Italy";
man.location.latitude = 42.001276;
man.location.longitude = 12.487432;
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Parsley";
prod.picture = "lasagne/parsley.png";
prod.manufacturer = manufacturers({name:  "Prezzemoli Inc."}).first();
prod.addedCarbonFootprint                    = 5;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.2;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Aglidiso";
man.picture = "aglidiso.png";
man.address = "50 Avenue de Cassan, 34320 Roujan, France";
man.location.latitude = 43.507097;
man.location.longitude = 3.307128;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Garlic";
prod.picture = "lasagne/garlic.png";
prod.manufacturer = manufacturers({name:  "Aglidiso"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 1;
prod.price.energyCosts                  = 0.1;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.picture = "insapori.png";
man.name =     "Insapori Inc.";
man.address = "Viale Nazioni Unite 10, 17019 Varazze, Italy";
man.location.latitude = 44.360083;
man.location.longitude = 8.577848;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 8;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Mixed Herbs";
prod.picture = "lasagne/mixedherbs.png";
prod.manufacturer = manufacturers({name:  "Insapori Inc."}).first();
prod.components.push(products({name:      "Parsley"}).first());
prod.components.push(products({name:      "Garlic"}).first());
prod.addedCarbonFootprint                    = 3;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.1;
prod.price.manufacturingCosts           = 0.2;
prod.price.materialCosts                = 0.1;
products.insert(prod);


man = new Manufacturer();
man.name =     "CASI";
man.picture = "casi.png";
man.address = "Calle Tomas Aznar Domenech 30, 03007 Alacant, Spain";
man.location.latitude = 38.341548;
man.location.longitude = -0.514416;
man.workingConditions.employmentProtection  = 5;
man.workingConditions.salery                = 5;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Tomato";
prod.picture = "lasagne/tomato.png";
prod.manufacturer = manufacturers({name:  "CASI"}).first();
prod.addedCarbonFootprint                    = 10;
prod.price.productPrice                 = 2;
prod.price.energyCosts                  = 0.3;
prod.price.manufacturingCosts           = 0.1;
prod.price.materialCosts                = 0.1;
products.insert(prod);

man = new Manufacturer();
man.name =     "Bonduelle";
man.picture = "bonduelle.png"; 
man.address = "Avenida Les Germanies 49, 46291 Benimodo, Spain";
man.location.latitude = 39.215836;
man.location.longitude = -0.522188;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Tomato Sauce";
prod.picture = "lasagne/tomatosauce.png";
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
man.picture = "texaslonghorn.png";
man.address = "2139 San Jacinto Boulevard, Austin, USA";
man.location.latitude = 30.283808;
man.location.longitude = -97.732715;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 7;
man.workingConditions.workingHours          = 6;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Beef";
prod.picture = "lasagne/beef.png";
prod.manufacturer = manufacturers({name:  "Texas Longhorn"}).first();
prod.addedCarbonFootprint                    = 400;
prod.price.productPrice                 = 30;
prod.price.energyCosts                  = 10;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name =     "Shuanghui";
man.picture = "shuanghui.png";
man.setAddress("Hongkong East Road, Qingdao, China");
man.location.latitude = 35.956997;
man.location.longitude = 119.36065;

man.workingConditions.employmentProtection  = 4;
man.workingConditions.salery                = 4;
man.workingConditions.workingHours          = 5;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Pork";
prod.picture = "lasagne/pork.png";
prod.manufacturer = manufacturers({name:  "Shuanghui"}).first();
prod.addedCarbonFootprint                    = 350;
prod.price.productPrice                 = 35;
prod.price.energyCosts                  = 8;
prod.price.manufacturingCosts           = 5;
prod.price.materialCosts                = 10;
products.insert(prod);

man = new Manufacturer();
man.name ="Smithfield Foods";
man.picture = "smithfield.png";
man.address = "200 Commerce St, Smithfield, VA 23430, USA";
man.location.latitude = 36.984743;
man.location.longitude = -76.630274;
man.workingConditions.employmentProtection  = 6;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);

prod = new Product();
prod.name                               = "Minced Meat";
prod.picture = "lasagne/mincedmeat.png";
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
man.picture = "lidl.png";
man.setAddress("Stiftsbergstrasse 1, 74172 Neckarsulm, Germany");
man.location.latitude = 49.1846;
man.location.longitude = 9.2358;
man.workingConditions.employmentProtection  = 7;
man.workingConditions.salery                = 6;
man.workingConditions.workingHours          = 7;
manufacturers.insert(man);



prod = new Product();
prod.name                               = "Lasagne";
prod.picture = "lasagne/lasagne.png";
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


//----------------------------------------//

man = new Manufacturer();
man.name = "MTU";
man.picture = "mtu.png";
man.setAddress("Maybachplatz 1, 88045 Friedrichshafen, Germany");
man.location.latitude = 53.066751;
man.location.longitude = 8.903028;
man.workingConditions.employmentProtection = 9;
man.workingConditions.salery = 9;
man.workingConditions.workingHours = 7;
manufacturers.insert(man);

prod = new Product();
prod.name = "Ground propulsion";
prod.picture = "Mercedes-Benz/fahrwerk.png";
prod.manufacturer = manufacturers({ name: "MTU" }).first();
prod.addedCarbonFootprint = 200;
prod.price.productPrice = 10000;
prod.price.energyCosts = 100;
prod.price.manufacturingCosts = 100;
prod.price.materialCosts = 5000;
products.insert(prod);

man = new Manufacturer();
man.name = "Mercedes Benz";
man.picture = "mercedes.png";
man.setAddress("Im Holter Feld, 28309 Bremen, Germany");
man.location.latitude = 47.657110;
man.location.longitude = 9.469640;
man.workingConditions.employmentProtection = 8;
man.workingConditions.salery = 8;
man.workingConditions.workingHours = 8;
manufacturers.insert(man);

prod = new Product();
prod.name = "Mercedes E Class";
prod.picture = "Mercedes-Benz/e-class.png";
prod.manufacturer = manufacturers({ name: "Mercedes Benz" }).first();
prod.components.push(products({ name: "Ground propulsion" }).first());
prod.addedCarbonFootprint = 300;
prod.price.productPrice = 30000;
prod.price.energyCosts = 200;
prod.price.manufacturingCosts = 200;
prod.price.materialCosts = 10000;
products.insert(prod);