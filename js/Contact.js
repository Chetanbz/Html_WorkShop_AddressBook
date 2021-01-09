class Contact {
id;
    get name(){ return this._name;}
    get address (){ return  this._address; }
    get city ()   { return  this._city; }
    get state ()  { return  this._state; }
    get zip ()    { return  this._zip; }
    get phone ()  { return  this._phone; }

    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-z A-Z]{2,}$');
        if (nameRegex.test(name))  this._name = name;
        else throw "Name is Invalid";
    }

    set address(address){
        let nameRegex = RegExp('^[A-Z a-z ,0-9]{4,}$');
        if (nameRegex.test(address)) this._address = address;
        else throw "Address is Invalid"    
    }

    set city(city){
         this._city = city;  
    }

    set state(state){
       this._state = state;
          
    }

    set zip(zip){
        let nameRegex = RegExp('^[0-9]{6}$');
        if (nameRegex.test(zip)) this._zip = zip;
        else throw "zip  is Invalid"    
    }

    set phone(phone){
        let nameRegex = RegExp('^[0-9]{10}$');
        if (nameRegex.test(phone)) this._phone = phone;
        else throw "Phone  is Invalid"    
    }

    toString(){
        return " Name " + this._name + 
        "; Address " + this._address+
        "; city " + this._city+
        "; State " + this._state+
        "; Zip " + this._zip+
        "; Phone " + this._phone
    }
}