const mongoose = require("mongoose");
const schema = mongoose.Schema

const productSchema = new schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    discountPercentage:{
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
    },
    rating:{
        type: mongoose.SchemaTypes.Decimal128,
        required: true,
    },
    stock:{
        type: Number,
        required: false,
        default: 23757219
    },
    brand:{
        type: String,
        required: false,
        default: "EG2_SKC"
    },
    category:{
        type: String,
        required: true,
    },
    categoryId: {
        type: Number,
    },
    thumbnail:{
        type: String,
        required: true,
    },
})

productSchema.set('toJSON', {
    getters: true,
    transform: (doc, ret) => {
      if (ret.discountPercentage) {
        ret.discountPercentage = Number(ret.discountPercentage.toString());
      }
      if (ret.rating) {
        ret.rating = Number(ret.rating.toString());
      }
      delete ret.__v;
      delete ret._id;
      return ret;
    },
  });

module.exports = mongoose.model('Product', productSchema)