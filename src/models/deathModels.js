const mongoose = require('mongoose');
const {Schema,model} = mongoose;


const deathModelSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    img : {
        type: String,
        required: true
    },
    date : {
        type : Date,
        required: true
    }
},{
    timestamps: true, versionKey: false
});

const deathModel = model("deathData", deathModelSchema);

module.exports = deathModel;