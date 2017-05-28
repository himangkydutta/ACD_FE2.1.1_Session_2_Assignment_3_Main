var passcode = "valid user";
/**
 * The empDetails class is base class which showing employee properties.
 * @class empDetails
 * @constructor
**/
var empDetails = (function () {
    function empDetails() {
    }
    Object.defineProperty(empDetails.prototype, "userName", {
        get: function () {
            return this.userName;
        },
        set: function (newUser) {
            if (passcode == 'valid user') {
                this.username = newUser;
                console.log("The username " + this.username + " is a valid user ");
            }
            else {
                console.log('The user is not valid');
            }
        },
        enumerable: true,
        configurable: true
    });
    return empDetails;
}());
var emp = new empDetails();
emp.username = 'Anita';
