
// create array and split array into strings
const splitString = function(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

// break one string into an array of strings
let stringToArray = splitString(titanicStr, '\n')

// break individual passengers into array of passenger data
let parseData = splitPassengerData(stringToArray); 

// turn strings into their own array nested in an array
function splitPassengerData(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        passengers[i] = splitString(passengers[i], ',')
    }
    return passengers
}

//Turn nested arrays into objects.
let passengerManifest = [];
// convert nested arrays into objects to be used in class template
const titanicObjects = function(arrToObject) {
    let obj;
    for (let i = 0; i < arrToObject.length; i++) {
        obj = new TitanicData(arrToObject[i][0], 
            arrToObject[i][1],
            arrToObject[i][2],
            arrToObject[i][3],
            arrToObject[i][4],
            arrToObject[i][5],
            arrToObject[i][6],
            arrToObject[i][7])
        passengerManifest.push(obj)
    }
}
//create class template to pass ojects into
class TitanicData {
    constructor(survived, pclass, name, sex, age, sibspouses, parentschildren, fare){
        this.survived = survived,
        this.pclass = pclass,
        this.name = name,
        this.sex = sex,
        this.age = age,
        this.sibspouses = sibspouses,
        this.parentschildren = parentschildren,
        this.fare = fare
    }
}

titanicObjects(parseData)
console.log(passengerManifest);




