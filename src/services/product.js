import Product from "../models/product.js";

export const serviceGetProducts = async () => {
  const products = await Product.find();
  return products;
};

export const serviceCreateProduct = async (payload) => {
  const product = await Product.create(payload);
  return product;
};
