

function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);
    console.log(arrayOfStrings)
    return arrayOfStrings;
}

splitString(titanicStr , "\n")


// create class

class TitanicData {

    constructor(survived, pclass, name, sex, age, siblings, spouses, parents, children, fare){
        this.survived = survived,
        this.pclass = pclass,
        this.name = name,
        this.sex = sex,
        this.age = age,
        this.siblings = siblings,
        this.spouses = spouses,
        this.parents = parents,
        this.children = children,
        this.fare = fare
    }

}


