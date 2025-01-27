const storeModel = require('../models/store');
const Product = require('../models/product')

exports.createStore = async (req, res) => {
    try {
        const { name, location, email } = req.body;
        // Check if store is existing
        const storeExistsName = await storeModel.findOne({ where: { name } });
        console.log(storeExistsName);

        if (storeExistsName) {
            return res.status(400).json({
                message: "Store name already exists"
            })
        }
        const storeExists = await storeModel.findOne({ where: { email: email.toLowerCase() } });

        if (storeExists) {
            return res.status(400).json({
                message: "Store already exists"
            })
        }

        const newStore = await storeModel.create({
            name,
            location,
            email: email.toLowerCase()
        });
        // Send a success response
        res.status(201).json({
            message: "Store created successfully",
            data: newStore
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error.message
        })
    }
};

exports.getAllStores = async (req, res) => {
    try {
        const allStores = await storeModel.findAll();
        // Send a success response
        res.status(200).json({
            message: "All stores in the database",
            data: allStores,
            total: allStores.length
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error.message
        })
    }
};

exports.getOneStore = async (req, res) => {
    try {
        const { id } = req.params;
        const store = await storeModel.findOne({ where: { id: id }, include: [{ model: Product, attributes: ["productName", 'productQuantity', 'productAmount'], as: 'Products' }] });
        if (!store) {
            return res.status(404).json({
                message: "Store Not Found"
            })
        }
        // Send a success response
        res.status(200).json({
            message: "Store Found",
            data: store
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error.message
        })
    }
}

// exports.getOneStore = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const store = await storeModel.findByPk(id);
//         if (!store) {
//             return res.status(404).json({
//                 message: "Store Not Found"
//             })
//         }
//         // Send a success response
//         res.status(200).json({
//             message: "Store Found",
//             data: store
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: "Internal Server Error" + error.message
//         })
//     }
// }
