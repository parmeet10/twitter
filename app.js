const express = require('express');
const path = require('path')
const app = express();
const port = 3003;
const middleware = require("./middleware")


const server = app.listen(port, () => console.log("server started and running at port", port))

app.set("view engine", "pug")
app.set("views", "views")

//Routes
const loginRoute = require("./routes/loginRoutes")
const registerRoute = require("./routes/registerRoutes")
app.use("/login", loginRoute)
app.use("/register", registerRoute)

app.use(express.static(path.join(__dirname,"public")))

app.get("/", middleware.requireLogin, (req, res) => {
    let payload = {
        pageTitle: "parmeet page"
    }
    res.status(200).render("home", payload)
})

