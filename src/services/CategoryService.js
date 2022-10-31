const debug = require("debug")("app:categoryServices");
const Category = require("../models/Category");

const categoryService = {
  FindAll: async (req) => {
    return Category.find();
  }
};

module.exports = categoryService;
