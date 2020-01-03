const connection = require("./model");
const express = require("express");
const application = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const courseController = require("./controllers/courses");
application.use(bodyParser.urlencoded({
    extended : true
}));

application.set("views", path.join(__dirname,"/views/"))

application.engine("hbs", expressHandlebars({
    engine : "hbs",
    defaultLayout : "mainlayout",
    layoutDir : __dirname+"views/layouts"
}))

application.set("view engine", "hbs")
application.get("/", (req, res)=> {
    // res.send("<h1>Hello World</h1>");
    res.render("index", {});
})

application.use("/course", courseController)
application.listen("3000", () => {
    console.log("server started");
})