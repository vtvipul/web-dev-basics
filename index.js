const express = require("express");
const path = require("path")
const exphbs = require("express-handlebars")
const logger = require("./logger");




app = express()

const PORT = process.env.PORT || 5000

// middleware to set static folder for serving html files
app.use(express.static(path.join(__dirname, "public")))

// using logger middleware
app.use(logger)

// using body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// using handlebars middleware
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// using routes
app.use("/api/members", require("./routes/api/members"))


app.listen(PORT, ()=>console.log("SERVER STARTED"))