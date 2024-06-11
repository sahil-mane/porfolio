const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    skill:{
        type:String,
        required:true
    },
    level:{
        type:Number
    },
},{timestamps:true}
);

const skill = mongoose.model("Skill",SkillSchema);

module.exports = skill;