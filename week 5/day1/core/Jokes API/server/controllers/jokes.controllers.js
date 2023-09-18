const jokes = require("../models/jokes.models.js")


// Create
module.exports.createjokes = (req,res) =>{
    jokes.create(req.body).then(newjokes=>{
          console.log("New jokes", newjokes)
          res.status(200).json(newjokes)
      }).catch(err=>{
          res.status(400).json(err)
      })
  }

  // FindAll
module.exports.findAlljokes =(req,res)=>{
    jokes.find()
    .then(alljokes =>{
      console.log(alljokes)
      res.json({alljokes})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOnejokes = (req,res) =>{
    jokes.findOne({_id:req.params.id})
      .then((jokes)=>{
        console.log("This jokes", jokes)
        res.json(jokes)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

  // Update One
  module.exports.updateOnejokes = (req, res) => {
    jokes.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjokes => { res.json({ updatedjokes }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deletejokes = (req, res) => {
    jokes.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}