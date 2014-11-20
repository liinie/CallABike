SearchProcessor= function (productsDb_, manufacturersDb_) {
    var productsDb = productsDb_;
    var manufacturersDb = manufacturersDb_;
    
    this.keyPressEvent = function (e) {
        // if enter key is pressed
        if (e.keyCode == 13) {
            var searchString = document.getElementById('search-field').inputValue;
            this.processSearchEntry(searchString);
        }
    };
    this.processSearchEntry = function (searchString) {
        
        // WARNING: this cannot cope with names occurring more than once in the database
        var prod = productsDb({name:searchString}).first();
        
        if(prod !== false) {
            mapController.renderProduct(prod);
            document.getElementById("sidebar-product").setAttribute('product',"{{prod}}");
        }
    };
};