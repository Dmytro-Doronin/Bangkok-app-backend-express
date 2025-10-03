"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const productController_1 = require("../controllers/productController");
const compositionRoot_1 = require("../../compositionRoot");
const express_1 = require("express");
exports.productRouter = (0, express_1.Router)();
const productControllerInstance = compositionRoot_1.container.get(productController_1.ProductController);
exports.productRouter.get('/', (req, res) => productControllerInstance.getAllProductsController(req, res));
