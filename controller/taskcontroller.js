const Task = require('../module/task');
exports.createTask = async (req,res)=>{
    const task = new Task({
        title:req.body.title,
        userId:req.userId
    });
    await task.save();
    res.json({
        message:"task created",
        task
    });
};

exports.getTasks = async (req,res)=>{
    const tasks = await Task.find({
        userId:req.userId

    });
    res.json(task);
};

exports.updateTask = async (req,res)=>{
    const task = await Task.findbyIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(task);
};


exports.deleteTask = async (req,res)=>{
    await Task.findbyIdAndDelete(req.params.id);
    res.json({
        message:"task deleted"
    });
};