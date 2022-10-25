let posts = [{"author": "Max Mustermann",
"image": "img/1.jpg",
"description": "Text",
"location":"Köln"
},

{"author": "Max Mustermann",
"image": "img/2.jpg",
"description": "Text",
"location":"Budapest"
},

{"author": "Max Mustermann",
"image": "img/3.jpg",
"description": "Text",
"location":"Berlin"
},

{"author": "Max Mustermann",
"image": "img/4.jpg",
"description": "Text",
"location":"Rom"
},

{"author": "Max Mustermann",
"image": "img/5.jpg",
"description": "Text",
"location":"Paris"
},
];



function render(){
    for (let i = 0; i < posts.length; i++) {
        const element = posts[i]; 
        document.getElementById("content").innerHTML += /*html*/`
        <div>
            <img src="${element['image']}">
            <div>${element['author']}</div>
            <div>${element['description']}</div>
        </div>
        `;     
    }
}