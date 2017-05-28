
let passcode = "valid user";
/**
 * The empDetails class is base class which shows for a valid user with properties.
 * @class empDetails
 * @constructor
**/

class empDetails{

    username:String;
    
    get userName():String{

        return this.userName;
    }

    set userName(newUser:String){

        if(passcode =='valid user')
        {
            this.username=newUser;
            console.log(`The username ${this.username} is a valid user `);
        }
        else{

            console.log('The user is not valid')
        }

    }

    
}

var emp = new empDetails();
emp .username = 'Anita';