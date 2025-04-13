const mongoose = require("mongoose");

const ProjectS = new mongoose.Schema({
    name: {
        type: String, required: true},
    description:String,
    tags:[String],
    createdAt:{type: Date, default:Date.now},
});

module.exports= mongoose.model("Project", ProjectS)
