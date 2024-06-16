import Product from "../models/product.js";

export const serviceGetProducts = async () => {
  const products = await Product.find();
  return products;
};

export const serviceCreateProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};

export const serviseUpdateProduct = async (id, payload) => {
  const product = await Product.findByIdAndUpdate(id, payload, { new: true });
  return product;
};
