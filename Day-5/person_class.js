class person{
    constructor(firstName,lastName,age,bloodGroup,qualification,city)
    {
        this.firstName=firstName;
        this.lastname=lastName;
        this.age=age;
        this.bloodGroup=bloodGroup;
        this.qualification=qualification;
        this.city=city;

    }
}

const ins=new person("Arjun","Prasanth",24,"B+","Btech","Chennai");
console.log(ins);