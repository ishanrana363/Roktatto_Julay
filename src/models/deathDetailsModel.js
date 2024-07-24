const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const DeathDetailSchema = new Schema({
    deathId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'DeathDetail',
        required: true
    },
    place : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    schoolOrUniversity : {
        type : String,
        required: true
    },
    killedByWhom : {
        type : String,
        required: true
    },
    img1 : {
        type : String,
        required: true
    },
    img2 : {
        type : String,
        required: true
    },
    img3 : {
        type : String,
        required: true
    },
    img4 : {
        type : String,
        required: true
    },
    img5 : {
        type : String,
        required: true
    }

},{timestamps: true, versionKey: false});


const deathDetails = model("deathDetails",DeathDetailSchema);
module.exports = deathDetails;