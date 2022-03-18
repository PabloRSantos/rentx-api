"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = void 0;

var _express = require("express");

var _authenticate = require("./authenticate.routes");

var _cars = require("./cars.routes");

var _categories = require("./categories.routes");

var _password = require("./password.routes");

var _rentals = require("./rentals.routes");

var _specification = require("./specification.routes");

var _users = require("./users.routes");

const router = (0, _express.Router)();
exports.router = router;
router.use("/categories", _categories.categoryRoutes);
router.use("/specifications", _specification.specificationsRouter);
router.use("/users", _users.usersRouter);
router.use("/cars", _cars.carsRouter);
router.use("/rentals", _rentals.rentalsRouter);
router.use("/password", _password.passwordRouter);
router.use(_authenticate.authenticateRouter);