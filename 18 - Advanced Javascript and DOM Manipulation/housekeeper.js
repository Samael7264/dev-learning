const housekeeper = {
    name: "Mona",
    age: 19,
    exp: 2,
    nationality: "Spain",
    hasWorkPermit: "Yes"
}

var housekeeper1 = {
    name: "Mona",
    age: 19,
    exp: 2,
    nationality: "Spain",
    hasWorkPermit: "Yes"
}

function HouseKeeper (name,age,exp,nationality,hasWorkPermit) {
    this.name =  name;
    this.age = age;
    this.exp = exp;
    this.nationality = nationality;
    this.hasWorkPermit =  hasWorkPermit;
    this.clean = function (){
        alert("Cleaning in Progress.");
    }
}