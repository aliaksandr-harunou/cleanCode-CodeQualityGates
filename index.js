const {Airport} = require('./Airport');
const {MilitaryPlane} = require('./planes/MilitaryPlane');
const {PassengerPlane} = require('./planes/PassengerPlane');
const {ExperimentalPlane} = require('./planes/ExperimentalPlane');
const {MILITARYTYPES} = require('./models/militaryTypes');
const {EXPERIMENTALTYPES} = require('./models/experimentalTypes');
const {CLASSIFICATIONLEVELS} = require('./models/classificationLevels');

(function createAirport() {

    let planes = [
        new PassengerPlane({model:'Boeing-737', maxSpeed: 900, maxFlightDistance: 12000, maxLoadCapacity: 60500, passengersCapacity:164}),
        new PassengerPlane({model:'Boeing-737-800', maxSpeed: 940, maxFlightDistance: 12300, maxLoadCapacity: 63870, passengersCapacity:192}),
        new PassengerPlane({model:'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, passengersCapacity:242}),
        new PassengerPlane({model:'Airbus A320', maxSpeed: 930, maxFlightDistance: 11800, maxLoadCapacity: 65500, passengersCapacity:188}),
        new PassengerPlane({model:'Airbus A330', maxSpeed: 990, maxFlightDistance: 14800, maxLoadCapacity: 80500, passengersCapacity:222}),
        new PassengerPlane({model:'Embraer 190', maxSpeed: 870, maxFlightDistance: 8100, maxLoadCapacity: 30800, passengersCapacity:64}),
        new PassengerPlane({model:'Sukhoi Superjet 100', maxSpeed: 870, maxFlightDistance: 11500, maxLoadCapacity: 50500, passengersCapacity:140}),
        new PassengerPlane({model:'Bombardier CS300', maxSpeed: 920, maxFlightDistance: 11000, maxLoadCapacity: 60700, passengersCapacity:196}),
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