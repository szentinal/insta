let names = ['Erica Muster', 'Jonny Do'];
let phoneNumbers = ['01740293983', '017633333'];
load();


// Im local storage speichern
function save() {
    let namesAsText = JSON.stringify(names);
    let phoneNumbersAsText = JSON.stringify(phoneNumbers);
    localStorage.setItem('names', namesAsText);
    localStorage.setItem('phoneNumbers', phoneNumbersAsText);
}

// Aus dem local storage laden
function load() {
    let namesAsText = localStorage.getItem('names');
    let phoneNumbersAsText = localStorage.getItem('phoneNumbers');
    if (namesAsText && phoneNumbersAsText) {
        names = JSON.parse(namesAsText);
        phoneNumbers = JSON.parse(phoneNumbersAsText);
    }
}



function addContact() {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    names.push(name);
    phoneNumbers.push(phone);
    render();
    save();
}

function deleteContact(i) {
    names.splice(i, 1);
    phoneNumbers.splice(i, 1);
    render();
    save();

}


function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += `
    <div>
        <input placeholder="Name" id="name">
        <input placeholder="Telefon" id="phone">
        <button onclick="addContact()"> Hinzufügen </button>  
      
    </div>  
    `;

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const phoneNumber = phoneNumbers[i];
        content.innerHTML += `
        <div class="card">
            <b>Name: </b> ${name} <br>
            <b>Telefon: </b> ${phoneNumber} <br>
            <button onclick="deleteContact(${i})"> Löschen </button>
        </div>
    
        `;
    }
}