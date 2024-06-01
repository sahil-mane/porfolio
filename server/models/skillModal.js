const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    level:{
        type:Number
    },
},{timestamps:true}
);

const skill = mongoose.model("Skill",SkillSchema);

module.exports = {skill};