class Block{
    constructor(x, y){
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30,
        this.height = 30;
        this.Visiblity = 225;
        this.image = loadImage("Green Square.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;

        if(this.body.speed < 5){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);

            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            
            pop();
        }
        else{
            World.remove(world, this.body);

            push();

            this.Visiblity = this.Visiblity - 5;
            tint(255, this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 30, 30);
            
            pop();
        }
    }
    score(){
        if(this.Visiblity <= 0 && this.Visiblity >= -200){
            Score ++;
        }
    }
}