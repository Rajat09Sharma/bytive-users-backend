const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: Object
    },
    company: {
        type: Object
    }
});

const User = new mongoose.model("user", userSchema);

module.exports = User;