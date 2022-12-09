class World {

    character = new Character();
    level = level1;
    // enemies = level1.enemies;
    // clouds = level1.clouds;
    // backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;//context, to have the functionality to add to the world
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();//set crusors
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);


        // this.enemies.forEach(enemy =>{
        //     this.addToMap(enemy);
        // });
        // this.clouds.forEach(cloud =>{
        //     this.addToMap(cloud);
        // });
        // this.backgroundObjects.forEach((bgo) => {
        //     this.addToMap(bgo);
        // });

        //shorten to:
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);
        //Load the animation as often as possible from the graphic card
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    //Function to add the movable images to the world
    addToMap(movableImage) {
        //to mirror the pic
        if (movableImage.otherDirection) {
            this.ctx.save(); //save the status of ctx first
            this.ctx.translate(movableImage.width, 0);//moves by the width caused by flipping
            this.ctx.scale(-1, 1);//mirror the picture
            movableImage.x = movableImage.x * -1;
        }
        this.ctx.drawImage(movableImage.img, movableImage.x, movableImage.y, movableImage.width, movableImage.height);
        //for the opposite case
        if (movableImage.otherDirection) {
            movableImage.x = movableImage.x * -1;
            this.ctx.restore(); //reset the status
        }


    }
}