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

export const serviceGetProduct = async (id) => {
  const product = await Product.findById(id);
  return product;
};

export const serviceDeleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};
