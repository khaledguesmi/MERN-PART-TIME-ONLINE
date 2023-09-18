const Authors = require("../models/authors.models.js")


// Create
module.exports.createAuthors = (req,res) =>{
    Authors.create(req.body).then(newAuthors=>{
          console.log("New authors", newAuthors)
          res.status(200).json(newAuthors)
      }).catch(err=>{
          res.status(400).json(err)
      })
  }

  // FindAll
module.exports.findAllAuthors =(req,res)=>{
    Authors.find()
    .then(allAuthors =>{
      console.log(allAuthors)
      res.json({allAuthors})
     })
    .catch(err => { res.json({message: "Wait a minute😊"})})
}

// FindOne
module.exports.findOneAuthors = (req,res) =>{
    Authors.findOne({_id:req.params.id})
      .then((authors)=>{
        console.log("This authors", authors)
        res.json(authors)
    }).catch(err=>{
        console.log(err)
        res.json({error:err})
    })
}

  // Update One
  module.exports.updateOneAuthors = (req, res) => {
    Authors.findByIdAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAuthors => { res.json({ updatedAuthors }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })
}
// Delete

module.exports.deleteAuthors = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(deletedresult => { res.json({ deletedresult }) })
        .catch(err => { res.json({ message: "wait a minute 😏😏", error: err }) })


}