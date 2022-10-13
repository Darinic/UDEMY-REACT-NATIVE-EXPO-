// let name = "Max";
// let age = 29;
let hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobby) => {
  return (
    "Name is " +
    userName +
    ", age is " +
    userAge +
    " and the user has hobbies: " +
    userHasHobby
  );
}

const add = (a,b) => a + b;

const addOne = a => a + 1;

const addRandom = () => 1 + 2;

// console.log(addOne(1))

// console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi, I am " + this.name);
    }
};

console.log(person)

person.greet();

const hobbies = ["Sports", "Cooking"];
for(let hobby of hobbies) {
    console.log(hobby);
}

hobbies.map(hobby => console.log(hobby));
console.log(addRandom());

const coppiedArray = [...hobbies];

const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));

const printName = ({name}) => {
    console.log(name);
}

printName(person);

const {name, age} = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);
