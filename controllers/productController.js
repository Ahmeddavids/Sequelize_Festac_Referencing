// Import your Model
const productModel = require('../models/product');
const Store = require('../models/store');

exports.createProduct = async (req, res) => {
    try {
        // Get the store ID from the params
        const storeId = req.params.id;
        // Destructure and Extract the fields from the Request Body
        const { productName, productQuantity, productAmount } = req.body;

        // Create a new Instance of the product and save to the database
        const newProduct = await productModel.create({
            productAmount,
            productQuantity,
            productName,
            storeId
        });
        // Send a success response
        res.status(201).json({
            message: "Product created successfully",
            data: newProduct
        });

    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error: ' + error.message
        })
    }
};




exports.getOneProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findOne({ where: { id: id }, include: { model: Store, as: 'Store', attributes: ['name', 'location'] }, });
        if (!product) {
            return res.status(404).json({
                message: "Product Not Found"
            })
        }
        // Send a success response
        res.status(200).json({
            message: "product Found",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error.message
        })
    }
}

exports.getAllProductBelongingToAStore = async (req, res) => {
    try {
        const storeId = req.params.id;
        const products = await productModel.findAll({ where: { storeId: storeId } })
        if (products.length == 0) {
            return res.status(404).json({
                message: "No Products Found"
            })
        }
        // Send a success response
        res.status(200).json({
            message: "Products Found",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error.message
        })
    }
}

