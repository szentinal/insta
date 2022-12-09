
let contacts = [//JSON = JavaScript Object Notation
    new Contact('Jessica','Moldovan','29384723984792')
];

function addContact(firstName, lastName){
    let myContact = new Contact(firstName, lastName);
    contacts.push(myContact);
}

addContact('Junus','Ergin');