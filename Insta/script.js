let posts = [{
    "author": "Max",
    "profileImage": "img/profile1.jpg",
    "image": "img/1.jpg",
    "description": "Warum in die Ferne schweifen, wenn das Urlaubsfeeling direkt vor der eigenen Haustür wartet? Die Füße im Sand vergraben, ins Wasser springen, Beach-Volleyball spielen und Cocktails trinken in der Surfer-Bar – all das könnt ihr auch in Köln. ",
    "location": "Köln",
    "comment": []
},

{
    "author": "Tina",
    "profileImage": "img/profile2.jpg",
    "image": "img/2.jpg",
    "description": "Budapest, Ungarns Hauptstadt, ist durch den Fluss Donau in zwei Teile geteilt. Die Kettenbrücke aus dem 19. Jahrhundert verbindet das hügelige Buda-Viertel mit dem flachen Pest. Eine Seilbahn fährt auf den Burghügel bis in Budas Altstadt, wo das Historische Museum von Budapest die Geschichte des Lebens in der Stadt von Römischer Zeit an aufzeigt.",
    "location": "Budapest",
    "comment": []
},

{
    "author": "Alexander",
    "profileImage": "img/profile3.jpg",
    "image": "img/3.jpg",
    "description": "Berlin ist die Hauptstadt und ein Land der Bundesrepublik Deutschland. Die Stadt ist mit rund 3,7 Millionen Einwohnern die bevölkerungsreichste und mit 892 Quadratkilometern die flächengrößte Gemeinde Deutschlands sowie die bevölkerungsreichste Stadt der Europäischen Union.",
    "location": "Berlin",
    "comment": []
},

{
    "author": "Heinz",
    "profileImage": "img/profile4.jpg",
    "image": "img/4.jpg",
    "description": "Rom, die Hauptstadt Italiens, ist eine kosmopolitische Großstadt, die fast 3.000 Jahre Kunstgeschichte, Architektur und Kultur von Weltrang vorweisen kann. Antike Ruinen wie das Forum und das Kolosseum zeugen von der einstigen Macht des Römischen Reiches. ",
    "location": "Rom",
    "comment": []
},

{
    "author": "Abraham",
    "profileImage": "img/profile5.jpg",
    "image": "img/5.jpg",
    "description": "Paris ist langweilig.",
    "location": "Paris",
    "comment": []
},
];

function render() {
    renderLeft();
    renderRight();
    jumpTop();
}

function renderLeft() {

    for (let i = 0; i < 1; i++) {
        const post = posts[i];
        document.getElementById("contentLeft").innerHTML += /*html*/`
        <div class="post">
            <div class="postHead">
                <img class="profileImg" src="${post['profileImage']}" onclick="fullScreen(${i})">
                <h2>${post['author']}</h2>
            </div>
            <img class="postImage" src="${post['image']}">
            <div><h2>${post['location']}</h2></div>
            <div><p>${post['description']}<p></div>
            <div class="commentBox">
                <div id="newPost${i}"></div>
                <div class="commentBox2">
                <input type="text" id="input${i}" class="inputComment" placeholder="Write your comments"><button class="myButton" onclick="pushComment(${i})">Go</button>             
                </div>
            </div>
        </div>
        `;
    }
}


function renderRight() {
    for (let i = 0; i < 1; i++) {
        const post = posts[i];
        document.getElementById("contentRight").innerHTML += /*html*/`
        <div class="profile" >           
            <img class="profileImg" src="${post['profileImage']}" onclick="fullScreen(${i})">
            <div><h2>${post['author']}</h2></div>
        </div>
        `;
    }
}

function addCommentToArray(index) {
    let input = document.getElementById(`input${index}`);
    posts[index]['comment'].push(input.value);
    input.value = '';
}

function pushComment(index) {
    addCommentToArray(index);
    const post = posts[index];
    let content = document.getElementById(`newPost${index}`);
 

    for (let j = 0; j < post['comment'].length; j++) {
        const comment = post['comment'][j];
        let t= time();
        content.innerHTML += `
        <div class="commentSub">
            <img class="profileImgOwn" src="img/ownPic.jpg">
            <div> <p><b>${t}</b>: ${comment}</div></p> 
        </div>    
        `;
    }
    time();
    resetComment(index);
}

function resetComment(i) {
    posts[i]['comment'].splice(0, 1);
}

function time(){
	var date = new Date();
	var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	
	return date_time;
}

function search(){
    let search = document.getElementById('search').value;
    search = search.toLowerCase();  
    let searchField = "author";
    let searchVal = "mySearch";
    for (let i=0 ; i < posts.length ; i++)
    {
        const post = posts[i];
        if (post[searchField] == searchVal) {
        // results.push(obj.list[i]);
        fullScreen(i);
        }
    }
}


function jumpTop(){
    window.scrollTo(0, 0);
}


function fullScreen(i) {
    let screen = document.getElementById('contentLeft');
    const post = posts[i];
    screen.innerHTML ='';    
    screen.innerHTML += /*html*/`
            <div class = "fullscreen" id = "fullscreen"> 
                 <img src="${post['profileImage']}">
                 <div class = "btn">
                    <img  src="img/undo-2-64.png"  onclick="closeWindow()">
                 </div>
            <div>
        `;
        renderLeft();
}

function closeWindow()
{
    document.getElementById('contentLeft').innerHTML='';
    renderLeft();
}
