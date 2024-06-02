import {
  serviceCreateProduct,
  serviceGetProducts,
} from "../services/product.js";

export const getProducts = async (req, res) => {
  const products = await serviceGetProducts();
  res.json({
    products,
  });
};

export const createProduct = async (req, res) => {
  const product = await serviceCreateProduct(req.body);
  res.json({ product });
};
