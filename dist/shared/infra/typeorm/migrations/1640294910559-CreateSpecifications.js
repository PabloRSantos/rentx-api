"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateSpecifications1640294910559 = void 0;

var _typeorm = require("typeorm");

class CreateSpecifications1640294910559 {
  async up(queryRunner) {
    await queryRunner.createTable(new _typeorm.Table({
      name: "specifications",
      columns: [{
        name: "id",
        type: "uuid",
        isPrimary: true
      }, {
        name: "name",
        type: "varchar"
      }, {
        name: "description",
        type: "varchar"
      }, {
        name: "created_at",
        type: "timestamp",
        default: "now()"
      }]
    }));
  }

  async down(queryRunner) {
    await queryRunner.dropTable("specifications");
  }

}

exports.CreateSpecifications1640294910559 = CreateSpecifications1640294910559;