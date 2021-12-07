const {Airport} = require('./Airport');
const {MilitaryPlane} = require('./planes/MilitaryPlane');
const {PassengerPlane} = require('./planes/PassengerPlane');
const {ExperimentalPlane} = require('./planes/ExperimentalPlane');
const {MILITARYTYPES} = require('./models/militaryTypes');
const {EXPERIMENTALTYPES} = require('./models/experimentalTypes');
const {CLASSIFICATIONLEVELS} = require('./models/classificationLevels');

(function createAirport() {

    let planes = [
        new PassengerPlane('Boeing-737', 900, 12000, 60500, 164),
        new PassengerPlane('Boeing-737-800', 940, 12300, 63870, 192),
        new PassengerPlane('Boeing-747', 980, 16100, 70500, 242),
        new PassengerPlane('Airbus A320', 930, 11800, 65500, 188),
        new PassengerPlane('Airbus A330', 990, 14800, 80500, 222),
        new PassengerPlane('Embraer 190', 870, 8100, 30800, 64),
        new PassengerPlane('Sukhoi Superjet 100', 870, 11500, 50500, 140),
        new PassengerPlane('Bombardier CS300', 920, 11000, 60700, 196),
        new MilitaryPlane('B-1B Lancer', 1050, 21000, 80000, MILITARYTYPES.BOMBER),
        new MilitaryPlane('B-2 Spirit', 1030, 22000, 70000, MILITARYTYPES.BOMBER),
        new MilitaryPlane('B-52 Stratofortress', 1000, 20000, 80000, MILITARYTYPES.BOMBER),
        new MilitaryPlane('F-15', 1500, 12000, 10000, MILITARYTYPES.FIGHTER),
        new MilitaryPlane('F-22', 1550, 13000, 11000, MILITARYTYPES.FIGHTER),
        new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MILITARYTYPES.TRANSPORT),
        new ExperimentalPlane("Bell X-14", 277, 482, 500, EXPERIMENTALTYPES.HIGH_ALTITUDE, CLASSIFICATIONLEVELS.SECRET),
        new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, EXPERIMENTALTYPES.VERTICAL_TAKE_OFF_LANDING, CLASSIFICATIONLEVELS.TOP_SECRET)
    ];

    let airport = new Airport(planes);
    let militaryAirport = new Airport(airport.getMilitaryPlanes());
    let passengerAirport = new Airport(airport.getPassengerPlanes());
    console.log(`Military airport sorted by max distance: ${airport.print(militaryAirport.sortByMaxDistance())}`);
    console.log(`Passenger airport sorted by max speed: ${airport.print(passengerAirport.sortByMaxSpeed())}`);
    console.log(`Plane with max passenger capacity: ${airport.print(passengerAirport.getPassengerPlaneWithMaxPassengersCapacity())}`);
    module.exports = {airport};
})();