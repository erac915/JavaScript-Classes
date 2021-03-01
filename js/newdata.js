
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
        this.survived = survived
        this.pclass = pclass
        this.splitName(name) 
        this.sex = sex
        this.age = age
        this.sibspouses = sibspouses
        this.parentschildren = parentschildren
        this.fare = fare
    }
    splitName(name) {
        let arr = name.split(' ')
        this.title = arr[0]
        this.firstName = arr[1]
        this.lastName = arr.slice(2).join(' ')
    }
    displayGuestInfo() {
        for(let passenger of passengerManifest) {
            let gridItem2 = '';
            let manifest = passenger;
            gridItem2 += `<li>${passenger.survived} ${passenger.pclass} ${passenger.age}</li>`
        };
        document.querySelector('.info').innerHTML = gridItem2;
    }
};

//log all data to the console
titanicObjects(parseData)
console.log(passengerManifest);

//Select elements where data will be stored/viewed.
const guestName = document.querySelector('.name');
const guestInfo = document.querySelectorAll('.info');

//loop through passengerManifest and pull out name info to populate left column.
let gridItem1 = ''

    for(let passenger of passengerManifest) {
        let manifest = passenger;
        gridItem1 += `<li>${passenger.title} ${passenger.firstName} ${passenger.lastName}</li>`
    };

document.querySelector('.name').innerHTML = gridItem1;

//Select name from left column and populate right column with info.
guestName.forEach(passenger => {
    passenger.addEventListener('click', () => {
        displayGuestInfo();
    })
});
