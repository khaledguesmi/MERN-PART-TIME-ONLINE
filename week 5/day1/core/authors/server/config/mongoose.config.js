const mongoose = require("mongoose")
const dbName = process.env.DB
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`)
.then(() => console.log(`Established a connection to ${dbName}`))
.catch(err => console.log('Somthing went wrong when connecting to the database' , err))
