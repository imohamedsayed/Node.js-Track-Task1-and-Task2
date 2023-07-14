const fs = require("fs");

// create person object to be stored in a json file
let person = {
  fname: "Ahmed",
  lname: "Hossam",
  age: 20,
  city: "Alex",
};

let personInJSON = JSON.stringify(person);

fs.writeFileSync("data.json", personInJSON);

// Read the file and update person

person = JSON.parse(fs.readFileSync("data.json").toString());

person.fname = "Adel";
person.lname = "Ahmed";
person.age = 40;
person.city = "Cairo";

personInJSON = JSON.stringify(person);

fs.writeFileSync("data.json", personInJSON); // rewrite the object after it is updated
