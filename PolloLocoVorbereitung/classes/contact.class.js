//Beschreibung, wie ein Objekt aussehen soll; Es ist eine Schablone
class Contact extends Person {

    phone;

    constructor(firstName, lastName, phone){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        console.log('New contact is created!');
    }

    printFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }

    call(){
        window.location.href = 'tel:' + this.phone;
    }
}
