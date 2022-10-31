const express = require("express");
const debug = require("debug")("app:categoryRouter");
const categoryService = require("../services/CategoryService");

const categoryEndpointRouter = express.Router();

categoryEndpointRouter
  .route("/")
  .get(async (req, res) => {
      try {
        const categories = await categoryService.FindAll()

        res.status(200).json({
            success: true,
            errorMessages: [],
            result: categories
          });

      } catch (error) {
        res.status(400).json({
            success: false,
            errorMessages: [error.message],
            result: {}
          });
      }
  })

  module.exports = categoryEndpointRouter