const { PassengerPlane } = require('./planes/PassengerPlane');
const {MilitaryPlane} = require('./planes/MilitaryPlane');
const {ExperimentalPlane} = require('./planes/ExperimentalPlane');
const {MILITARYTYPES} = require('./models/militaryTypes');

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
        let planeWithMaxCapacity = passengerPlanes[0];
        return planeWithMaxCapacity;
    }

    getExperimentalPlanes() {
        return this.getSpecificPlanes(ExperimentalPlane);
    }

    getMilitaryPlanes() {
        return this.getSpecificPlanes(MilitaryPlane);
    }

    getTransportMilitaryPlanes() {
        return this.getMilitaryPlanesWithType(MILITARYTYPES.TRANSPORT);
    }

    getBomberMilitaryPlanes() {
        return this.getMilitaryPlanesWithType(MILITARYTYPES.BOMBER);
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
        let militaryPlanesWithType = militaryPlanes.filter(plane => plane.getMilitaryType() === militaryPlaneType);
        return militaryPlanesWithType;
    }

    getExperimentalPlanesWithClassificationLevel(classificationLevel) {
        let experimentalPlanes = this.getExperimentalPlanes();
        let experimentalPlanesWithClassificationLevel = experimentalPlanes.filter(plane => plane.classificationLevel === classificationLevel);
        return experimentalPlanesWithClassificationLevel;
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

    print(providedPlanes) {
        return JSON.stringify(providedPlanes);
    }
}

module.exports = {Airport};