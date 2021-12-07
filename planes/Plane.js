class Plane {

    constructor(planParameters) {
        this.model = planParameters.model;
        this.maxSpeed = planParameters.maxSpeed;
        this.maxFlightDistance = planParameters.maxFlightDistance;
        this.maxLoadCapacity = planParameters.maxLoadCapacity;
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
