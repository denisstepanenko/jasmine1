var Convertor = (function () {
    
    //var conv = function () {
                
    //}
    //conv.prototype.metersToKilometers = function (meters) {
    //    return meters * 1000;
    //};

    //return conv;

    return function () {
        this.metersToKilometers = function (meters) {
            return meters / 1000;
        };

        this.kilometersToMeters = function (km) {
            return km * 1000;
        }
    }
})();