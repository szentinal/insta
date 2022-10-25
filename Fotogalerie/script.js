let images = ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/7.jpg', 'img/8.jpg'];

function render() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('content').innerHTML += /*html*/` 
            <div class = "imgbox" > 
                 <img src="${images[i]}" onclick="fullScreen(${i})">
            <div>
        `;
    }
}

function fullScreen(i) {
    let screen = document.getElementById('content');
    screen.innerHTML ='';    
    screen.innerHTML += /*html*/`
            <div class = "fullscreen" id = "fullscreen"> 
                 <img src="${images[i]}">
                 <div class = "btn">
                    <img src="img/arrow-88-64.png"  onclick="nextLeft(${i})">
                    <img  src="img/delete-64.png"  onclick="closeWindow()">
                    <img  src="img/arrow-25-64.png"  onclick="nextRight(${i})">
                 </div>
            <div>
        `;
        render();
}

function nextRight(i){
        if (i == images.length -1) {
            let i = 0;
            fullScreen(i);
        }
        else {
            let next = ++i;
            fullScreen(next);
        }   
}

function nextLeft(i){
    if (i < 1) {
        let i = images.length-1;
        fullScreen(i);
    }
    else {
        let left = --i;
        fullScreen(left);
    }
}

function closeWindow()
{
    document.getElementById('content').innerHTML='';
    render();
}



