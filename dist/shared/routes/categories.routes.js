"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.categoryRoutes = void 0;

var _express = require("express");

var _multer = _interopRequireDefault(require("multer"));

var _useCases = require("../../modules/cars/useCases");

var _adapters = require("../adapters");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const categoryRoutes = (0, _express.Router)();
exports.categoryRoutes = categoryRoutes;
const upload = (0, _multer.default)({
  dest: "./tmp"
});
categoryRoutes.post("/", (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeCategoryController)()));
categoryRoutes.get("/", (0, _adapters.adaptRoute)((0, _useCases.makeListCategoriesController)()));
categoryRoutes.post("/import", upload.single("file"), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAuthenticatedMiddleware)()), (0, _adapters.adaptMiddleware)((0, _middlewares.makeEnsureAdminMiddleware)()), (0, _adapters.adaptRoute)((0, _useCases.makeImportCategoryController)()));