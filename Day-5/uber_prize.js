//Q-4 write a class to calculate the Uber price.
class Uber{
    constructor(distance,rateperkm=10)
    {
        this.distance=distance;
        this.rateperkm=rateperkm;

    }

    uberPrize(){
        return this.distance*this.rateperkm;
    }
}

const rate=new Uber(15,10);
console.log(rate.uberPrize());