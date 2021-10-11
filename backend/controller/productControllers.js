const Product = require('../models/Product');

const getALLProducts = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProductById = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);

        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getALLProducts,
    getProductById
}