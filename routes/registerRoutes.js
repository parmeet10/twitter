const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const router = express.Router()

app.set("view engine", "pug");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
const User = require('../schema/user')

router.get("/", (req, res) => {

    res.status(200).render("register");
})
router.post("/", async (req, res) => {

    let { firstname,
        lastname,
        username,
        email,
        password,
    } = req.body;
    let payload = req.body
    if (firstname && lastname && username && email && password) {
        let user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        }).catch((error) => {
            console.log(error)
            payload.errorMessage = "something went wrong";
            res.status(200).render("register", payload);
        })

        if (!user) {
            // no user found
        }
        else {
            if (email == user.email) {
                payload.errorMessage = "email already in use";
            }
            else {
                payload.errorMessage = "username already in use";
            }
            res.status(200).render("register", payload);
        }


    }
    else {
        payload.errorMessage = "Make sure each field has a valid value";
        res.status(200).render("register", payload);
    }

})
module.exports = router;