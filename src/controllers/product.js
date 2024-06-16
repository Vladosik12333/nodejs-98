import {
  serviceCreateProduct,
  serviceDeleteProduct,
  serviceGetProduct,
  serviceGetProducts,
  serviseUpdateProduct,
} from "../services/product.js";

import httpError from "../utils/httpError.js";

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

export const updateProduct = async (req, res) => {
  const product = await serviseUpdateProduct(req.params.id, req.body);
  if (!product) throw httpError(404, "Product was not found!");

  res.json({ product });
};

export const getById = async (req, res) => {
  const { id } = req.params;
  const product = await serviceGetProduct(id);

  if (!product) throw httpError(404, "Product was not found!");

  res.json({ product });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await serviceDeleteProduct(id);

  if (!product) throw httpError(404, "Product was not found!");

  res.json({ product });
};
