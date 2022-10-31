const mongoose = require("mongoose");
const schema = mongoose.Schema

const categorySchema = new schema({
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
})

categorySchema.set('toJSON', {
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

module.exports = mongoose.model('Category', categorySchema)