import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        count: { type: Number, required: true },
        countryCode: { type: Number, required: true },
        isPopular: {type: Boolean, default: false}
    },
    {versionKey: false}
);

const Product = mongoose.model("product", productSchema);

export default Product;