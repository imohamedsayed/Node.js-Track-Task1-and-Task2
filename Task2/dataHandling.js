const fs = require("fs");

const add_person = ({ id, fname, lname, city, age }) => {
  // ID is unique so we must check first if it's already not existed before

  const data = load_data();
  const IdHolder = data.find((person) => person.id === id);

  if (!IdHolder) {
    data.push({ id, fname, lname, city, age });
    save_data(data);
    console.log(`${fname} added successfully`);
  } else {
    console.error("ERROR DUPLICATE ID");
  }
};

// Read all persons

const persons_get = () => {
  const data = load_data();
  console.log(data);
};

// Get single person

const person_get = ({ id }) => {
  if (!id) {
    console.log("You have to give us the person's id");
    return;
  }
  const data = load_data();
  const IdHolder = data.find((person) => person.id === id);
  if (IdHolder) {
    console.log(IdHolder);
  } else {
    console.log("There is no person existed with the id " + id);
  }
};

// Delete person

const person_delete = ({ id }) => {
  if (!id) {
    console.log("You have to give us the person's id");
    return;
  }
  const data = load_data();
  const filteredData = data.filter((person) => person.id !== id);

  if (data.length == filteredData.length) {
    // Which means that we didn't find a person with that id
    console.log("There is no person with that id");
  } else {
    save_data(filteredData);
    console.log("Deleted Successfully");
  }
};

// List Persons

const persons_list = () => {
  const data = load_data();
  data.forEach((person) => {
    console.log(`${person.fname} ${person.lname} - ${person.city}.`);
  });
};

const load_data = () => {
  if (fs.existsSync("./data.json")) {
    const data = fs.readFileSync("./data.json").toString();
    return JSON.parse(data);
  } else {
    return [];
  }
};

const save_data = (data) => {
  const dataInJson = JSON.stringify(data);
  fs.writeFileSync("./data.json", dataInJson);
};

module.exports = {
  add_person,
  person_get,
  persons_get,
  person_delete,
  persons_list,
};
