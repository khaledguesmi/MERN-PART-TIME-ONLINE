const express = require("express");
const cors = require("cors");
const cookies = require("cookie-parser");
const logger = require("morgan");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const DB = process.env.DB;

/***********************Middleware***********************************/
app.use(
  cors({ origin: "http://localhost:3000", credentials: true }),
  express.json(),
  express.urlencoded({ extended: true }),
  cookies()
);
app.use(logger("dev"));
//***************Connect to Database******************* */
require("./config/mongoose.config")(DB);
//Import Routes
require("./routes/user.routes")(app);
require("./routes/book.routes")(app);
// Run server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}📶📶📶📶📶`);
});
