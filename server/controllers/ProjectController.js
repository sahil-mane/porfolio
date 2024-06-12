const Project = require("../models/projectModal");

exports.getProjects = async (req , res ) => {
    try {
        
        const projects = await Project.find();
        if(!projects)
            {
                return res.status(404).json({ success:false, message:"Project not found" });
            }
        return res.status(200).json({ success:true, projects });

    } catch (error) {
        return res.status(500).json({success:false, message:error.message})
    }
};

exports.addProject = async (req , res ) => {
    try {
        const { name, desc, githubUrl, hostedUrl, secureUrl, publicId, deleteToken} = req.body;

        if(!name || !desc)
            {
                return res.status(400).json({success:false, message:"please fill all the field"})
            }

        const newProject = await Project.create({
            name,
            desc,
            githubUrl,
            hostedUrl,
            img:secureUrl,
            publicId,
            deleteToken
        });
        
        await newProject.save();
        return res.status(201).json({success:true,message:"New Project added"});

    } catch (error) {
        return res.status(500).json({success:false , message:error.message})
    }
};

exports.removeProject = async (req ,res) => {
    try {
        const {id} = req.params;

        const project = await Project.findByIdAndDelete(id);

        if(!project)
            {
                return res.status(404).json({success:false,message:"Project not found"});
            }
            return res.status(200).json({success:true,message:"Project Deleted"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
};

exports.updateProject = async (req , res) => {
    try {
        const {id} = req.params;
        const updatedData = req.body // name, desc, githubUrl, hostedUrl, secureUrl, publicId, deleteToken

        const project = await Project.findById(id);

        if(!project)
            {
                return res.status(404).json({success:false, message:"Project not found"});
            }

        // Check if the "img" property exists in updatedData and has a value
        if(updatedData.img)
            {
                project.img = updatedData.img;
            }    

        // direct set the other fields of the project object from updatedData
        
        for(const key in updatedData)
            {
                if(key !== "img")
                    {
                        project[key] = updatedData[key];
                    }
            }
            
        await project.save();
        return res.status(200).json({success:true,message:"Project updated successfully"});    

    } catch (error) {
        return res.status(500).json({success:false , message:error.message});
    }
}