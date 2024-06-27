//Q-2 Convert the UML diagram to Typescript class. - use number for double


class circle{
    constructor(radius=1.0,color="Red"){
        this.radius=radius;
        this.color=color;

    }
    getRadius(){
        return this.radius;
    }
    setRadius(radius){
        this.radius=radius;
       // console.log(radius);
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color=color;
    }
    toString(){
        return ('Circle[radius = ' +this.radius + ',color = ' + this.color + ']');
    }
    getArea(){
        return 3.14*this.radius*this.radius;
    }

    getCircumference(){
        return 2*3.14*this.radius;
    }

}

const obj = new circle();
console.log(obj);
console.log(obj.getRadius());
console.log(obj.setRadius(5.0));
console.log(obj.getColor());
console.log(obj.setColor("Grey"));
console.log(obj.toString());
console.log(obj.getArea());
console.log(obj.getCircumference());



