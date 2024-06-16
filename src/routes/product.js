import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getById,
  getProducts,
  updateProduct,
} from "../controllers/product.js";
import wrapper from "../utils/wrapper.js";
import validation from "../middlewares/validation.js";
import { createProductSchema, updateProductSchema } from "../models/product.js";

const route = Router();

route.get("/", wrapper(getProducts));

route.get("/:id", wrapper(getById));

route.post("/", validation.body(createProductSchema), wrapper(createProduct));

route.put("/:id", validation.body(updateProductSchema), wrapper(updateProduct));

route.delete("/:id", wrapper(deleteProduct));

export default route;
