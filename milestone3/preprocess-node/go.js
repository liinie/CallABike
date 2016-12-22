var fs = require('fs');

fs.readFile('../data/cities.json', 'utf8', function (err, data) {
  fs.readFile('../data/bookings_city_daily.json', 'utf8', function (err2, data2) {
    if (err) throw err; // we'll not consider error handling for now
    if (err2) throw err2; // we'll not consider error handling for now

    var obj = JSON.parse(data);
    var obj2 = JSON.parse(data2);

    var items = [];

    for(let i = 0; i<obj.length; i++){
      
      let city = obj[i].city;

      var item = {
        city: city,
        bookings: []
      };

      for(let j = 0; j<obj2.length; j++){

        let booking = obj2[j];

        if(booking.city === city) {
          var subitem = {
            date: booking.day,
            count: booking.bookings
          };

          item.bookings.push(subitem);
        }

      }
      items.push(item);
    }

    fs.writeFile("../data/cityBookingsDaily", JSON.stringify(items), 'utf8', function(err) {
      if(err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  });
});