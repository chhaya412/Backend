const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
 
// const {
//     getUsers,
//     createUser,
//     updateUser,
//     deleteUser
// } = require('../controller/userController');

// const auth = require('../middleware/auth');

// router.get("/",getUsers);
// router.post("/",createUser);
// router.put("/:id",auth,updateUser);
// router.delete("/:id",auth,deleteUser);
// module.exports = router;

const {register ,login} =require("../controller/userController")

router.post("/register",register);
router.post("/login",login);

router.get("/profile",auth,(req,res)=>{
    res.json({
        message:"protected profile",
        userId:req.user.id
    });
});


module.exports = router;