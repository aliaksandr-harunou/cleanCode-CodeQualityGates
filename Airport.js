const { PassengerPlane } = require('./planes/PassengerPlane');
const {MilitaryPlane} = require('./planes/MilitaryPlane');
const {ExperimentalPlane} = require('./planes/ExperimentalPlane');
const {MILITARY_TYPES} = require('./models/militaryTypes');

class Airport {

    constructor(planes) {
        this.planes = planes;
    }

    getPassengerPlanes() {
        return this.getSpecificPlanes(PassengerPlane);
    }

    getPassengerPlaneWithMaxPassengersCapacity() {
        let passengerPlanes = this.getPassengerPlanes();
        passengerPlanes.sort((firstPlane, secondPlane) => firstPlane.getPassengersCapacity() > secondPlane.getPassengersCapacity() ? -1 : 1);
        return passengerPlanes[0];
    }

    getExperimentalPlanes() {
        return this.getSpecificPlanes(ExperimentalPlane);
    }

    getMilitaryPlanes() {
        return this.getSpecificPlanes(MilitaryPlane);
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanesWithType(MILITARY_TYPES.TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanesWithType(MILITARY_TYPES.BOMBER);
    }

    sortByMaxDistance() {
        this.planes.sort((currentPlane, nextPlane) => (currentPlane.getMaxFlightDistance() > nextPlane.getMaxFlightDistance()) ? 1 : -1);
        return this;
    }

    sortByMaxSpeed() {
        this.planes.sort((currentPlane, nextPlane) => (currentPlane.getMaxSpeed() > nextPlane.getMaxSpeed()) ? 1 : -1);
        return this;
    }

    sortByMaxLoadCapacity() {
        this.planes.sort((currentPlane, nextPlane) => (currentPlane.getMaxLoadCapacity() > nextPlane.getMaxLoadCapacity()) ? 1 : -1);
        return this;
    }

    getMilitaryPlanesWithType(militaryPlaneType) {
        let militaryPlanes = this.getMilitaryPlanes();
        return militaryPlanes.filter(plane => plane.getMilitaryType() === militaryPlaneType);
    }

    getExperimentalPlanesWithClassificationLevel(classificationLevel) {
        let experimentalPlanes = this.getExperimentalPlanes();
        return experimentalPlanes.filter(plane => plane.classificationLevel === classificationLevel);
    }

    getSpecificPlanes(planeType) {
        let specificPlanes = [];
        this.planes.forEach(plane => {
            if (plane instanceof planeType) {
                specificPlanes.push(plane);
            }
        });
        return specificPlanes;
    }

    getPlanes() {
        return this.planes;
    }
}

module.exports = {Airport};