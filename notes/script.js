let names = [];
let notes = [];
load();

function addNotes() {
    let name = document.getElementById('name').value;
    let note = document.getElementById('note').value;
    if (!(name && note)) {
        alert("Beide Felder müssen ausgefüllt sein!");
        name = document.getElementById('name').value ='';
        note = document.getElementById('note').value ='';
    }
    else {
        names.push(name);
        notes.push(note);
        name = document.getElementById('name').value ='';
        note = document.getElementById('note').value ='';
        render();
        save();
    }
    
    
}


function deleteNotes(i) {
    names.splice(i, 1);
    notes.splice(i, 1);
    // render();
    // save();
    // confirm("Bist du sicher?");
        let text = "Bist Du sicher?";
        if (confirm(text) == true) {
            render();
            save();
        } else {
    
        }
        // document.getElementById("demo").innerHTML = text;
      }



function save() {
    let namesAsText = JSON.stringify(names);
    let notesAsText = JSON.stringify(notes);
    localStorage.setItem('names', namesAsText);
    localStorage.setItem('notes', notesAsText);
}

function load() {
    let namesAsText = localStorage.getItem('names');
    let notesAsText = localStorage.getItem('notes');
    if (namesAsText && notesAsText) {
        names = JSON.parse(namesAsText);
        notes = JSON.parse(notesAsText);
    }
}

function render() {
    let content = document.getElementById('content');
    content.innerHTML = '';
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        const note = notes[i];
    
        content.innerHTML += `

        <div class="noteBox">
            <div> <b>${name} </b> </div>
            <div>${note} </div>
            <button onclick="deleteNotes(${i})"> Löschen </button>
        </div>  
        `;
    }
}