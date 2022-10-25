let titles = [];
let allNotes = [];
load();
function render() {
    let firstNotes = document.getElementById('firstNotes');
    firstNotes.innerHTML = '';

    for (let index = 0; index < titles.length; index++) {

        const title = titles[index];
        const notes = allNotes[index];
        firstNotes.innerHTML += `
        <div class="addNotes">
        <div class="newNotes">
        <b><h3>${title}</h3></b><br>
         ${notes}<br><br><br><br><br>
         <img class="trashImg"src="img/delete.png" onclick="deleteNote(${index})">
         </div>
         </div>`;

    }
}
function addNotes() {
    let title = document.getElementById('title').value;
    let notes = document.getElementById('notes').value;
    if (title == "" || notes == "") {
        alert("bitte etwas eingeben");
    }
    else {
        titles.push(title);
        allNotes.push(notes);
        render();
        save()
    }
}

function deleteNote(index) {
    titles.splice(index, 1);
    allNotes.splice(index, 1);
    render();
    save()
}

function save() {
    let titlesSave = JSON.stringify(titles);
    let notesSave = JSON.stringify(allNotes);
    localStorage.setItem('titles', titlesSave);
    localStorage.setItem('allNotes', notesSave);
}

function load() {
    let titlesSave = localStorage.getItem('titles');
    let notesSave = localStorage.getItem('allNotes');
    if (titlesSave && notesSave) {
        titles = JSON.parse(titlesSave);
        allNotes = JSON.parse(notesSave);
    }
}