require('dotenv').config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//#1
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, useUnifiedTopology: true 
},
() => {
  console.log("DB connection successful!!!")
}
);

//#2

const personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model("Person", personSchema);

//#3
const createAndSavePerson = (done) => {
  const mattRoss = new Person({ 
    name: "Matt Ross", age: 41, favoriteFoods: ["pasta, BBQ, cake"]
  })
  mattRoss.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data);
  })
  
};

//#4
const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

//#5
const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

//#6
const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

//#7
const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

//#8
const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

//#9
const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

//#10
const removeById = (personId, done) => {
  done(null /*, data*/);
};

//#11
const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

//#12
const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
