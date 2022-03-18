"use strict";

var _bcrypt = require("bcrypt");

var _supertest = _interopRequireDefault(require("supertest"));

var _uuid = require("uuid");

var _app = require("../../../../../shared/app");

var _typeorm = require("../../../../../shared/infra/typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeToken = async () => {
  const loginResponse = await (0, _supertest.default)(_app.app).post("/sessions").send({
    email: "admin@rentx.com.br",
    password: "admin"
  });
  return loginResponse.body.token;
};

let connection;
describe("Create Category Controller", () => {
  beforeAll(async () => {
    connection = await (0, _typeorm.makeConnection)();
    await connection.runMigrations();
    const id = (0, _uuid.v4)();
    const password = await (0, _bcrypt.hash)("admin", 8);
    await connection.query(`INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
                values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XXXXXX')
            `);
  });
  afterAll(async () => {
    await connection.dropDatabase();
    await connection.close();
  });
  it("should be able to create a new category", async () => {
    const token = await makeToken();
    const response = await (0, _supertest.default)(_app.app).post("/categories").send({
      name: "category supertest",
      description: "category supertest"
    }).set({
      Authorization: `Bearer ${token}`
    });
    expect(response.status).toBe(204);
  });
  it("should not be able to create a new category with name exists", async () => {
    const token = await makeToken();
    const response = await (0, _supertest.default)(_app.app).post("/categories").send({
      name: "category supertest",
      description: "category supertest"
    }).set({
      Authorization: `Bearer ${token}`
    });
    expect(response.status).toBe(400);
  });
});