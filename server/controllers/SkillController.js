const Skill = require("../models/skillModal");

exports.getSkills = async (req , res) => {
    try {
        const skills =  await Skill.find();
        if(!skills)
            {
                res.status(404).json({ success:false, message:"Skills not found"});
            }
        
        return res.status(200).json({ success:true, skills});    

    } catch (error) {
        res.status(500).json({success:false , message:error.message})
    }
};

exports.addSkill = async() => {
    try {
        const {skill , level } = req.body;

        const newSkill = await Skill.create({ skill , level});
        await newSkill.save();

        return res.status(201).json({success:true,message:"new Skill added"});
    } catch (error) {
        return res.status(500).json({success:false, messsage:error.message});
    }
}

exports.removeSkill = async(req , res) => {
    try {
        const {id} = req.params;

        const skill = await Skill.findByIdAndDelete(id);

        if(!skill)
            {
                return res.status(404).json({success:false,message:"skill not found"});
            }
            return res.status(200).json({success:true,message:"Skill Deleted"})

    } catch (error) {
        return res.status(500).json({success:false , message:error.message})
    }
}

