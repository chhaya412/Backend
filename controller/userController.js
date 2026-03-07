let user =[];
const User = require('../module/user');
exports.getUsers = (req,res)=>{
    res.json(user);
}
exports.createUser = (req,res)=>{
    const user =req.body;
    user.push(user);
    res.json({message:"User created successfully"});
}
exports.updateUser =(req,res)=>{
    const id = req.params.id;
    user[id] = req.body;
    res.json({message:"User updated successfully"});

};
exports.deleteUser =(req,res)=>{
    const id = req.params.id;
    user.splice(id,1);
    res.json({message:"User deleted successfully"});
};

