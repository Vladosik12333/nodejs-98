import { Router } from "express";

const route = Router();

route.get("/", (req, res, next) => res.sendStatus(298));

export default route;
