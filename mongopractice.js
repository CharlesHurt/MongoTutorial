'use strict'

  var mongoose = require("mongoose")

  mongoose.connect("mongodb://localhost/dbName") // Default port is 27017

  // Create a MODEL with simple schema
  // this returns a Model which can be used as a
  // constructore for instances of the Model
  var MyModelClass = mongoose.model("MyModelClass", {name: String, birthday: Date})

  // Create an INSTANCE of the model
  // Initial values were passed as an object
  // The populated instance was returned and saved as "var modelName"
  var modelInstance = new MyModelClass({name: "Todd", birthday:"11-11-11"})

  // SAVE the instance (of model)
  // i.e. add model to the "collection" which
  // is an array that only has one member as of now
  modelInstance.save(function(err) {
    if (err) {
      console.log()
    } else {
      console.log()
    }
  })

  // Get a model, by invoking mongoose.model() and passing the model name
  var MyModel = mongoose.model('MyModelClass')

  // Now  read the collection (actual data) of this model type
  MyModel.find(function(err, instancesInCollection) {
    if (err) {
      console.log('A read error occured:' + err)
    } else {
      console.log('Model data is: ' + instancesInCollection);
    }
  })

'SHOW A BUNCH OF PICTURES INCLUDEING THE PAPER FORMS'

'EXPLAIN WHY THE PROGRAM DID NOT EXIT'

TIPS
Create a .gitignore to avoid archiving keys or other sensitive data
AND to avoid archiving thing like node_modules
For example .gitignore
.env
node_modules
bower_components
