class Plane {

    constructor(planeParameters) {
        this.model = planeParameters.model;
        this.maxSpeed = planeParameters.maxSpeed;
        this.maxFlightDistance = planeParameters.maxFlightDistance;
        this.maxLoadCapacity = planeParameters.maxLoadCapacity;
    }

    getModel() {
        return this.model;
    }

    getMaxSpeed() {
        return this.maxSpeed;
    }

    getMaxFlightDistance() {
        return this.maxFlightDistance;
    }

    getMaxLoadCapacity() {     
        return this.maxLoadCapacity;
    }
}

module.exports = {Plane};
