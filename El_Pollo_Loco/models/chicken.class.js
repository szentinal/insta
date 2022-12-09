class Chicken extends MovableObject{
    height = 100;
    width = 100;
    y = 330;
    IMAGES_WALKING = [
        '../El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];
    constructor(){
        super().loadImage('../El_Pollo_Loco/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 200 + Math.random() * 500;//random between 0 and 1
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random()*.35;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() =>{
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageChache[path];
            this.currentImage++;
        },200);
    }
}