import mongoose from "mongoose";
import Joi from "joi";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true },
    countryCode: { type: Number, required: true },
    isPopular: { type: Boolean, default: false },
  },
  { versionKey: false }
);

const Product = mongoose.model("product", productSchema);

export const createProductSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  count: Joi.number().required(),
  countryCode: Joi.number().required(),
  isPopular: Joi.boolean().default(false),
});

export default Product;
