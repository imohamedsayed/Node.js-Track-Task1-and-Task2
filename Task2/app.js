/*

    ---------- PLEASE NOTE --------------

    ==> use command : node app add  ,, to add new person
    .
    . -> Ex : node app add --id=8 --fname="Ahmed" --lname="Hossam" --city="Alex" --age=20


    ###########


    ==> use command : node app delete ,,  to delete a specific person with id
    .
    . -> Ex : node app delete --id=4 
    . -> Ex : node app delete --id=6 

    ###########

    ==> use command : node app read  ,, to read all data for a person  by specifying his id
    .
    . -> EX : node app read --id=5 
    
    ###########

    ==> use command : node app list  ,, to list fname & lname & city for all persons.
    .
    . -> EX : node app list




*/

const yargs = require("yargs");
const DataHandler = require("./dataHandling");

// Start Defining commands

// ADD person

yargs.command({
  command: "add",
  describe: "Add a new person",
  builder: {
    id: {
      type: Number,
      describe: "Person's ID",
      demandOption: true,
    },
    fname: {
      type: String,
      describe: "Person's first name",
      demandOption: true,
    },
    city: {
      type: String,
      describe: "Where this person is located",
      demandOption: true,
    },
    lname: {
      type: String,
      describe: "Person's last name",
      demandOption: true,
    },
    age: {
      type: Number,
      describe: "Person age",
      demandOption: true,
    },
  },
  handler: (data) => {
    DataHandler.add_person(data);
  },
});

// read a Single Person

yargs.command({
  command: "read",
  describe: "returns a single person with the id specified",
  builder: {
    id: {
      type: Number,
      demandOption: true,
      describe: "Person's id",
    },
  },
  handler: (obj) => {
    DataHandler.person_get(obj);
  },
});

// Delete a singe person

yargs.command({
  command: "delete",
  describe: "Delete the person with the id specified",
  builder: {
    id: {
      type: String,
      demandOption: true,
      describe: "Person's id",
    },
  },
  handler: (obj) => {
    DataHandler.person_delete(obj);
  },
});

// List persons
yargs.command({
  command: "list",
  describe: "list all persons ",
  handler: () => {
    DataHandler.persons_list();
  },
});
yargs.parse(); // Invoke yargs
