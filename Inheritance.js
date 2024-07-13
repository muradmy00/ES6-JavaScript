class GrandFather{
    constructor(){
        this.FatherName = "AAAA";
    }
}

class Father extends GrandFather{
    constructor(name){

        super();
        this.Name = name;

    }
}

const person = new Father("BBB");
const person2 = new Father("CCC");
console.log(person,person2);




