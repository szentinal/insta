class MovableObject {
    x = 120;
    y = 285;
    img;
    height = 150;
    width = 150;
    imageChache = {};
    currentImage = 0;
    speed = .15;
    otherDirection = false;


    loadImage(path){
        this.img = new Image();//this.img = document.getElementById('image') <img id="image">
        this.img.src = path;
    }

    loadImages(array) {
        array.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageChache[path] = img; 
        });

    }

    moveRight(){
        console.log('Moving right');
    }

    moveLeft() {
        setInterval(()=> {
            this.x -= this.speed;
        }, 1000/60); //1000/60 in ms: how often it should repeat; 60fps   
    }
}