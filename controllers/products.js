const Product = require('../models/products');

const getAllProducts = async (req, res) => {

    const { company, name, feature, sort, select } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if(feature) {
        queryObject.feature = feature;
    }

    if(name){
        queryObject.name = { $regex: name, $options: "i"};
    }

    let apiData = Product.find(queryObject);
    
    if(sort){
        let sortData = sort.split(",").join(" ");
        apiData = apiData.sort(sortData);
    }
    
    if(select){
        let selectData = select.split(",").join(" ");
        apiData = apiData.select(selectData);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 5;
    let skip = (page-1)*limit;
    apiData = apiData.skip(skip).limit(limit);
    
    try {
        const Products = await apiData;
        if (Products) {
            res.status(200).json({ Products, nbHits: Products.length });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
const getAllProductsTesting = async (req, res) => {
    try {
        const Products = await Product.find(req.query);
        if (Products) {
            res.status(200).json({ Products });
        } else {
            res.status(404).json({ message: "Product not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}