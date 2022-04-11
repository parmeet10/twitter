const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const port = 3003;
const middleware = require("./middleware")
const database = require("./database")


const server = app.listen(port, () => console.log("server started and running at port", port))
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug")
app.set("views", "views")

//Routes
const loginRoute = require("./routes/loginRoutes")
const registerRoute = require("./routes/registerRoutes")
app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.use(express.static(path.join(__dirname, "public")))

app.get("/", middleware.requireLogin, (req, res) => {
    let payload = {
        pageTitle: "home"
    }
    res.status(200).render("home", payload)
})

