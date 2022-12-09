class Cloud extends MovableObject{
    y = 20;
    width = 500;
    height = 300;

    constructor(){
        super().loadImage('../El_Pollo_Loco/img/5_background/layers/4_clouds/1.png');
        
        this.x =  Math.random() * 500;//random between 0 and 1
        this.animate();
    }

    animate() { 
        this.moveLeft();  
    }

}