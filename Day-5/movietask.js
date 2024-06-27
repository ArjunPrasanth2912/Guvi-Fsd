//JS-Day5 tasks

/*
1)Class - Movie

The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

    title, which is a String representing the title of the movie
    studio, which is a String representing the studio that made the movie
    rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”


*/

//-------------------------------------------------------------------------------------------------------------------------------------------------------

class movie
{
    constructor(title,studio,rating="Pg-13"){           //creating class and constructor
        this.title=title;
        this.studio=studio;
        this.rating=rating;


    }
    
                
    
}
    
    const film1 = new movie("Django Unchained","Sony","R");
    const film2 = new movie("Forrest Gump","paramount","Pg-13");
    const film3 = new movie("kadaisi vivasayi","vj prod","Pg-13");
    const film4 = new movie("sarpatta parambarai","neelam");
    console.log(film1,film2,film3,film4);

    function getPg(rat)                                //Method to get the films which has rating Pg 13
        {
            let final=[];
            for(let i=0;i<rat.length;i++)
                {
                    if (rat[i].rating == "Pg-13") {
                        final.push(rat[i].title);
                        
                        }
                }
    
                
    
        return final;
        }


    let arr=[film1,film2,film3,film4];
    console.log(getPg(arr));

    const film5 = new movie("Casino Royale","Eon Productions","PG 13");   // creating instance of the above class using the mentioned data
    console.log(film5);
   




