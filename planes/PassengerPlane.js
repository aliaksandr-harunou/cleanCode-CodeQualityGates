const {Plane} = require('./Plane');

class PassengerPlane extends Plane {

    constructor(passengerPlaneParameters) {
        super(passengerPlaneParameters);
        this._passengersCapacity = passengerPlaneParameters.passengersCapacity;
    }

    getPassengersCapacity() {
        return this._passengersCapacity;
    }
}

module.exports = {PassengerPlane};