"use strict";

var _bcrypt = require("bcrypt");

var _supertest = _interopRequireDefault(require("supertest"));

var _uuid = require("uuid");

var _app = require("@/shared/app");

var _typeorm = require("@/shared/infra/typeorm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const makeToken = async () => {
  const loginResponse = await (0, _supertest.default)(_app.app).post("/sessions").send({
    email: "admin@rentx.com.br",
    password: "admin"
  });
  return loginResponse.body.token;
};

let connection;
describe("List Categories Controller", () => {
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
  it("should be able to list all available categories", async () => {
    const token = await makeToken();
    await (0, _supertest.default)(_app.app).post("/categories").send({
      name: "category supertest",
      description: "category supertest"
    }).set({
      Authorization: `Bearer ${token}`
    });
    const response = await (0, _supertest.default)(_app.app).get("/categories");
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name", "category supertest");
  });
});