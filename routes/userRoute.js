const express = require('express');
const router = express.Router();
 
const {
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controller/userController');

const auth = require('../middleware/auth');

router.get("/",getUsers);
router.post("/",createUser);
router.put("/:id",auth,updateUser);
router.delete("/:id",auth,deleteUser);
module.exports = router;