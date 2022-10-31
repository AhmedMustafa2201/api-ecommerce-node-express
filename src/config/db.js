const mongoose = require("mongoose");
const Category = require("../models/Category");
const Product = require("../models/Product");
const debug = require("debug")("app:db");

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Product.insertMany(
    //   [
    //     {
    //       title: "OPPOF19",
    //       description: "OPPO F19 is officially announced on April 2021.",
    //       price: 280,
    //       discountPercentage: 17.91,
    //       rating: 4.3,
    //       stock: 123,
    //       brand: "OPPO",
    //       categoryId: 1,
    //       category: "smartphones",
    //       thumbnail: "https://dummyjson.com/image/i/products/4/thumbnail.jpg",
    //     },
    //     {
    //       title: "MacBook Pro",
    //       description:
    //         "MacBook Pro 2021 with mini-LED display may launch between September, November",
    //       price: 1749,
    //       discountPercentage: 11.02,
    //       rating: 4.57,
    //       stock: 83,
    //       brand: "APPle",
    //       categoryId: 2,
    //       category: "laptops",
    //       thumbnail: "https://dummyjson.com/image/i/products/6/thumbnail.png",
    //     },
    //     {
    //       title: "Samsung Galaxy Book",
    //       description:
    //         "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
    //       price: 1499,
    //       discountPercentage: 4.15,
    //       rating: 4.25,
    //       stock: 50,
    //       brand: "Samsung",
    //       categoryId: 2,
    //       category: "laptops",
    //       thumbnail: "https://dummyjson.com/image/i/products/7/thumbnail.jpg",
    //     },
    //     {
    //       title: "Microsoft Surface Laptop 4",
    //       description:
    //         "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
    //       price: 1499,
    //       discountPercentage: 10.23,
    //       rating: 4.43,
    //       stock: 68,
    //       brand: "Microsoft Surface",
    //       categoryId: 2,
    //       category: "laptops",
    //       thumbnail: "https://dummyjson.com/image/i/products/8/thumbnail.jpg",
    //     },
    //     {
    //       title: "Brown Perfume",
    //       description:
    //         "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
    //       price: 40,
    //       discountPercentage: 15.66,
    //       rating: 4,
    //       stock: 52,
    //       brand: "Royal_Mirage",
    //       categoryId: 3,
    //       category: "fragrances",
    //       thumbnail: "https://dummyjson.com/image/i/products/12/thumbnail.jpg",
    //     },
    //     {
    //       title: "Non-Alcoholic Concentrated Perfume Oil",
    //       description:
    //         "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
    //       price: 120,
    //       discountPercentage: 15.6,
    //       rating: 4.21,
    //       stock: 114,
    //       brand: "Al Munakh",
    //       categoryId: 3,
    //       category: "fragrances",
    //       thumbnail: "https://dummyjson.com/image/i/products/14/thumbnail.jpg",
    //     },
    //     {
    //       title: "Eau De Perfume Spray",
    //       description:
    //         "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
    //       price: 30,
    //       discountPercentage: 10.99,
    //       rating: 4.7,
    //       stock: 105,
    //       brand: "Lord - Al-Rehab",
    //       categoryId: 3,
    //       category: "fragrances",
    //       thumbnail: "https://dummyjson.com/image/i/products/15/thumbnail.jpg",
    //     },
    //   ],
    //   (err, small) => {
    //     if (err) debug(err);
    //     debug(small);
    //   }
    // );

    // Category.insertMany(
    //   [
    //     {
    //       id: 1,
    //       name: "smartphones",
    //     },
    //     {
    //       id: 2,
    //       name: "laptops",
    //     },
    //     {
    //       id: 3,
    //       name: "fragrances",
    //     },
    //   ],
    //   (err, small) => {
    //     if (err) debug(err);
    //     debug(small);
    //   }
    // );
  } catch (error) {
    debug(`error on connection: ${error}`);
  }
};

// to close connection
// mongoose.disconnect()

module.exports = connect;
