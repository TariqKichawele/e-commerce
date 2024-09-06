import Product from "../models/productModel.js"


export const getAllProducts = async () => {
    try {
        const products = await Product.find({});
        res.json({ products });
    } catch (error) {
        console.log('Error in getAllProducts', error.message);
        res.status(500).json({ message: error.message });
    }
}