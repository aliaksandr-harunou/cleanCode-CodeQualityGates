const assert = require('chai').assert;

const {MilitaryPlane} = require('../planes/MilitaryPlane');
const {PassengerPlane} = require('../planes/PassengerPlane');
const {ExperimentalPlane} = require('../planes/ExperimentalPlane');
const {MILITARYTYPES} = require('../models/militaryTypes');
const {EXPERIMENTALTYPES} = require('../models/experimentalTypes');
const {CLASSIFICATIONLEVELS} = require('../models/classificationLevels');
const {airport} = require('../index');

describe('test airport', () => {

    let planeWithMaxPassengerCapacity = new PassengerPlane('Boeing-747', 980, 16100, 70500, 242);
    let planeWithMaxLoadCapacity = new MilitaryPlane('C-130 Hercules', 650, 5000, 110000, MILITARYTYPES.TRANSPORT);
    let planeWithMinLoadCapacity = new ExperimentalPlane("Ryan X-13 Vertijet", 560, 307, 500, EXPERIMENTALTYPES.VERTICAL_TAKE_OFF_LANDING, CLASSIFICATIONLEVELS.TOP_SECRET);

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
        assert.isEmpty(airport.getExperimentalPlanesWithClassificationLevel(CLASSIFICATIONLEVELS.UNCLASSIFIED));
    });
});