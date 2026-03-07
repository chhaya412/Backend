let user =[];
const User = require('../module/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// exports.getUsers = (req,res)=>{
//     res.json(user);
// }
// exports.createUser = (req,res)=>{
//     const user =req.body;
//     user.push(user);
//     res.json({message:"User created successfully"});
// }
// exports.updateUser =(req,res)=>{
//     const id = req.params.id;
//     user[id] = req.body;
//     res.json({message:"User updated successfully"});

// };
// exports.deleteUser =(req,res)=>{
//     const id = req.params.id;
//     user.splice(id,1);
//     res.json({message:"User deleted successfully"});
// };

exports.getusers = async (req,res) =>{
    try{
        const {name,email,password} = req.body;

        const hashedPassword = await bcrypt.hash(password,10);
        const user = new User({
            name,
            email,
            password:hashedPassword
        });
        await user.save();
        res.json({message:"user registered"});


    }catch(error){
        res.status(500).json(error);
    }
    };
     exports.login = async (req,res) =>{

        const {email,password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(400).json({
                message:"user not found"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
     if (!isMatch){
        return res.status(400).json({
            message:"invalid credentials"
        });
     }
     const token=jwt.sign(
        {id:user._id},
        "secretkey",
        {expiresIn:"1h"}
        
     );
        res.json({token,
        message:"login successful"
            
    });
        };


        