class Character extends MovableObject {
    height = 300;
    y = 135;
    speed = 10;
    IMAGES_WALKING = [
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-21.png',
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-22.png',
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-23.png',
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-24.png',
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-25.png',
        '../El_Pollo_Loco/img/2_character_pepe/2_walk/W-26.png'
    ];
    world;
    walking_sound = new Audio('../El_Pollo_Loco/audio/walking_sound.mp3');

    constructor() {
        super().loadImage('../El_Pollo_Loco/img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > 0 ) { 
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x +270;
        }, 1000 / 60);

        setInterval(() => {
            //walk animation
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageChache[path];
                this.currentImage++;
            }
        }, 100);
    }

    jump() {

    }
}