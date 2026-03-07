const express = require('express');
const router = express.Router();

const {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controller/productController');

const auth = require('../middleware/auth');

router.get("/",getProducts);
router.post("/",createProduct);
router.put("/:id",auth,updateProduct);
router.delete("/:id",auth,deleteProduct);

module.exports = router;