const mongoose = require("./connection");

const CRUD = mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    markForDeletion:{
        type:Boolean,
        default:false

    },
    markForEdit:{
        type:Boolean,
        default:false
    }
});

const crudOp = mongoose.model("crudoperations",CRUD);

module.exports = crudOp;