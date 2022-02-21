require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const { Schema } = mongoose
const personSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  age: Number,
  favoriteFoods: [String],
})

let Person = mongoose.model('Person', personSchema)


const createAndSavePerson = (done) => {
  const andrew = new Person({name: "Andrew", age: 22, favoriteFoods: ["sushi", 'jambalaya']})  
  andrew.save((err, data) => {
    if (err) return console.error(err)
    done(null, data)
  })
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return console.log(err)
    done(null, data)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({name: personName}, (err, data) => {
    if (err) return console.log(err)
    done(null, data)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods: food }, (err, data) => {
    if (err) return console.log(err)
    done(null, data);
  })
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) => {
    if (err) return console.log(err)
    done(null, data);
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById(personId, (err, person) => {
    if (err) return console.log(err)
    person.favoriteFoods.push(foodToAdd)
    person.save((err, data) => {
      if (err) return console.log(err)
      done(null, data);
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOne({ name: personName}, (err, person) => {
    if (err) return console.log(err)
    person.age = ageToSet
    person.save((err, data) => {
      if (err) return console.log(err)
      done(null, data);
    })
  })
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

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
