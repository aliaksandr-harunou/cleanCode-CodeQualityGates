const {Plane} = require('./Plane');

class MilitaryPlane extends Plane {

    constructor(militaryPlaneParameters) {
        super(militaryPlaneParameters);
        this.militaryType = militaryPlaneParameters.type;

    }

    getMilitaryType() {
        return this.militaryType;
    }
}

module.exports = {MilitaryPlane};