let products = [];

exports.getProducts = (req, res) => {
    res.json(products);
};

exports.createProduct = (req, res) => {
    const product = req.body;
    products.push(product);
    res.json({ message: "Product created successfully" });
};

exports.updateProduct = (req, res) => {
    const id = req.params.id;
    products[id] = req.body;
    res.json({ message: "Product updated successfully" });
};

exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    products.splice(id, 1);
    res.json({ message: "Product deleted successfully" });
};

