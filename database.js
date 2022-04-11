const mongoose = require('mongoose')

class Database {

    constructor() {
        this.connect();
    }
    connect() {
        mongoose.connect("mongodb+srv://parmeet:parmeet123@cluster0.p1jkr.mongodb.net/twitterclone?retryWrites=true&w=majority")
            .then(() => {
                console.log("mongodb is up and running");
            })
            .catch((err) => {
                console.log("database connection error" + err)
            })
    }
}
module.exports = new Database();