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

        if(this.body.speed < 9){
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);

            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            
            pop();
        }
        else{
            World.remove(world, this.body);

            push();

            this.Visiblity = this.Visiblity - 5;
            fill (0, 255, 0, this.Visiblity);

            pop();
        }
    }
    score(){
        if(this.Visiblity <= 0 && this.Visiblity >= -200){
            Score ++;
        }
    }
}
