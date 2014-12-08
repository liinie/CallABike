SearchProcessor = function (productsDb_, manufacturersDb_) {
    var productsDb = productsDb_;
    var manufacturersDb = manufacturersDb_;

    this.keyPressEvent = function (e) {
        this.processSearchEntry(e);
    };
    this.processSearchEntry = function (searchString) {

        // WARNING: this cannot cope with names occurring more than once in the database
        var prod = productsDb({name:searchString}).first();
        
        if(prod !== false) {
            prod.computeData();
            mapController.renderProduct(prod);
            document.getElementById("sidebar-product").product = prod;
        }
    };
};