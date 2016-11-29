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

