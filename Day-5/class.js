class food
{
    constructor(name,prize,ingredients,type,image,quantity){
       // console.log("instance created",name,prize,ingredients,type,image);
         this.name=name;                          //binding those variables to the FOOD class
         this.prize=prize;
         this.ingredients=ingredients;
         this.type=type;
         this.image=image;
         this.quantity=quantity;
    }
    getBill(){                                             //member functions
        return this.prize*this.quantity;
    }
    getType(){
        return this.type;
    }
    getIng(){
        return this.ingredients;
    }
}
const idli = new food("idli",50,["batter","salt","rice"],"veg","https://m.media-amazon.com/images/I/71Y0IzBEp3L._AC_SY200_.jpg",2);//instances
const dosa = new food("Dosa",80,["batter","salt","rice"],"veg","https://m.media-amazon.com/images/I/71Y0IzBEp3L._AC_SY200_.jpg",3);
//const pongal=new food();

console.log(idli,dosa);

console.log(idli.getBill(),dosa.getBill(),idli.getIng());
console.log(idli.getType(),dosa.getType());


///Inheritence
//base and derived class

class fastfood extends food
{
    constructor(name,prize,ingredients,type,image,quantity,secretIng=[]){
        super(name,prize,ingredients,type,image,quantity)
        this.secret=secretIng;

    }
}
const friedrice=new fastfood("pongal",50,["batter","salt","rice"],"veg","https://m.media-amazon.com/images/I/71Y0IzBEp3L._AC_SY200_.jpg",2,["ajino","masala"]);

console.log(friedrice); 