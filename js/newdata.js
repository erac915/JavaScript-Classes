
// create array

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);
    return arrayOfStrings;
}

//// call split string function 
splitString(titanicStr , "\n")

const titanticObject = Object.assign({}, titanicStr)
console.log(titanicStr)


// create class w objects

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




