/// <reference path="../lib/_references.js" />

describe("Meters to Kilometers", function () {
    var conv;

    beforeEach(function () {
        conv = new Convertor();
    });

    it("Should convert meters to kilometers", function () {
        expect(conv.metersToKilometers(1000)).toEqual(1);
        
        expect(conv.metersToKilometers(1000)).not.toEqual(2);
    });

    it("Should convert KM to M", function () {
        expect(conv.kilometersToMeters(1)).toEqual(1000);

        expect(conv.kilometersToMeters(1)).not.toEqual(0);
    });
});