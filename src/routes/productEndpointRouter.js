const express = require("express");
const debug = require("debug")("app:productRouter");
const ProductService = require("../services/ProductServices");

// connecting to db
// const connect = require('./src/config/db')

const productEndpointRouter = express.Router();

productEndpointRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const products = await ProductService.FindAll(req);
      res.status(200).json({
        success: true,
        errorMessages: [],
        result: products,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        errorMessages: [error.message],
        result: {},
      });
    }
  })
  .post(async (req, res) => {
    try {
      const createdProduct = await ProductService.Create(req);

      res.status(200).json({
        success: true,
        result: {
          message: "product saved successfully!",
          product: createdProduct
        },
        errorMessages: [],
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        errorMessages: [`error on saving this product - ${error}`],
        result: {},
      });
    }
  });

productEndpointRouter
  .route("/:id")
  .get(async (req, res) => {
    try {
      const product = await ProductService.FindOneById(req);

      res.status(200).json({
        success: true,
        result: product,
        errorMessages: [],
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        result: {},
        errorMessages: [error.message],
      });
    }
  })
  .put(async (req, res) => {
    try {
      const newProduct = await ProductService.Update(req)
      res.status(200).json({
        success: false,
        result: {message: "product updated successfully!", product: newProduct},
        errorMessages: [],
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        result: {},
        errorMessages: [error.message],
      });
    }
  });

module.exports = productEndpointRouter;
