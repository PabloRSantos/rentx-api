"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = void 0;

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _config2 = require("../config");

var _swagger = _interopRequireDefault(require("../swagger"));

var _typeorm = require("./infra/typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const app = (0, _express.default)();
exports.app = app;
app.use(_express.default.json());
app.use("/api-docs", _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
app.use("/avatar", _express.default.static(`${_config2.UploadConfig.tempFolder}/avatar`));
app.use("/cars", _express.default.static(`${_config2.UploadConfig.tempFolder}/cars`));
(0, _typeorm.makeConnection)().then(async () => {
  const {
    router
  } = await Promise.resolve().then(() => _interopRequireWildcard(require("./routes")));
  app.use(router);
}).catch(console.log);