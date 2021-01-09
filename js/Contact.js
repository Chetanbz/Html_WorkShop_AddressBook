class Contact {

    
    get fullName(){ return this._fullName;}
    get first ()  { return  this._first; }
    get last ()   { return  this._last; }
    get address (){ return  this._address; }
    get city ()   { return  this._city; }
    get state ()  { return  this._state; }
    get zip ()    { return  this._zip; }
    get phone ()  { return  this._phone; }

    set fullName(fullName){
        this._fullName = fullName;
    }

    set first(first){
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(first)) this._first = first;
        else throw "First is Invalid"    
    }

    set last(last){
       let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
       if (nameRegex.test(last)) this._last = last;
       else throw "Last is Invalid"    
     }

    set address(address){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(address)) this._address = address;
        else throw "Address is Invalid"    
    }

    set city(city){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(city)) this._city = city;
        else throw "city  is Invalid"    
    }

    set state(state){
        let nameRegex = RegExp('^[A-Z a-z]{4,}$');
        if (nameRegex.test(state)) this._state = state;
        else throw "state  is Invalid"    
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
        return "First Name " + this.first + 
        "; Last Name " + this.last+
        "; Address " + this.address+
        "; city " + this.city+
        "; State " + this.state+
        "; Zip " + this.zip+
        "; Phone " + this.phone+
        "; email " + this.email;
    }
}