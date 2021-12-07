const assert = require('chai').assert;

const {MilitaryPlane} = require('../planes/MilitaryPlane');
const {PassengerPlane} = require('../planes/PassengerPlane');
const {ExperimentalPlane} = require('../planes/ExperimentalPlane');
const {MILITARY_TYPES} = require('../models/militaryTypes');
const {EXPERIMENTAL_TYPES} = require('../models/experimentalTypes');
const {CLASSIFICATION_LEVELS} = require('../models/classificationLevels');
const {airport} = require('../index');

describe('test airport', () => {

    let planeWithMaxPassengerCapacity = new PassengerPlane({model:'Boeing-747', maxSpeed: 980, maxFlightDistance: 16100, maxLoadCapacity: 70500, passengersCapacity:242});
    let planeWithMaxLoadCapacity = new MilitaryPlane({model:'C-130 Hercules', maxSpeed: 650, maxFlightDistance: 5000, maxLoadCapacity: 110000, type: MILITARY_TYPES.TRANSPORT});
    let planeWithMinLoadCapacity = new ExperimentalPlane({model:'Ryan X-13 Vertijet', maxSpeed: 560, maxFlightDistance: 307, maxLoadCapacity: 500, type: EXPERIMENTAL_TYPES.VERTICAL_TAKE_OFF_LANDING, classificationLevel: CLASSIFICATION_LEVELS.TOP_SECRET});

    it('should have at least one military plane with transport type', () => {
        assert.isNotEmpty(airport.getTransportMilitaryPlanes());
    });

    it('should check passenger plane with max capacity', () => {
        assert.deepEqual(airport.getPassengerPlaneWithMaxPassengersCapacity(), planeWithMaxPassengerCapacity);
    });

    it('should check sorting by max capacity', () => {
        let getPlanesSortedByMaxLoadCapacity = airport.sortByMaxLoadCapacity().getPlanes();
        assert.deepEqual(getPlanesSortedByMaxLoadCapacity[getPlanesSortedByMaxLoadCapacity.length - 1], planeWithMaxLoadCapacity);
        assert.deepEqual(getPlanesSortedByMaxLoadCapacity[0], planeWithMinLoadCapacity);
    });

    it('should have at least one military plane with bomber type', () => {
        assert.isNotEmpty(airport.getBomberMilitaryPlanes());
    });

    it('should check that experimental planes have classification level higher than unclassified', () => {
        assert.isEmpty(airport.getExperimentalPlanesWithClassificationLevel(CLASSIFICATION_LEVELS.UNCLASSIFIED));
    });
});