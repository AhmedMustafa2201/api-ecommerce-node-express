const debug = require("debug")("app:productServices");
const Product = require("../models/Product");

const ProductService = {
  FindAll: async (req) => {
    const { query } = req;
    if (req.query.categoryId) {
      query.categoryId = req.query.categoryId;
    }

    return Product.find(query);
  },
  FindOneById: async (req) => {
    return await Product.findById(req.params.id);
  },
  Create: async (req) => {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      category,
      categoryId,
    } = req.body;
    const prod_OBJ = new Product({
      title,
      description,
      price,
      discountPercentage,
      rating,
      category,
      categoryId,
    });
    await prod_OBJ.save();
    return prod_OBJ
  },
  Update: async (req) => {
    const {
      title,
      description,
      price,
      discountPercentage,
      rating,
      category,
      categoryId,
    } = req.body;

    const { id } = req.params;

    const oldProduct = await Product.findById(id);

    oldProduct.set({
      title,
      description,
      price,
      discountPercentage,
      rating,
      category,
      categoryId,
    });

    await oldProduct.save()
    return oldProduct
  },
};

module.exports = ProductService;
