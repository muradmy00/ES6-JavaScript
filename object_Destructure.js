//  Objects
 
 const Person = {

    Name : "Murad",
    Age : 23,
    Study : "CSE",
    Status : "Single",
    FavoriteSeries : ["Harry Porter","Breaking Bad","Game of Throngs","Viking","Dark"]

 }




 console.log(Person.FavoriteSeries);

 const {Status,Age,salary} = Person;

 const Study = Person.Study;

 console.log(Study,Status,Age,salary);


//  Array


const Game = ["E-Football","PUBG","Mini Milisiya","Dream League","Car Rasing"]

const [best,better,...good] = Game;

console.log(best,better,good);