const {Plane} = require('./Plane');

class PassengerPlane extends Plane {

    constructor(obj) {
        super(obj.model, obj.maxSpeed, obj.maxFlightDistance, obj.maxLoadCapacity);
        this._passengersCapacity = obj.passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = {PassengerPlane};