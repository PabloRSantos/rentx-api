"use strict";

var _repositories = require("@/modules/cars/repositories");

var _helpers = require("@/shared/helpers");

var _CreateCategoryUseCase = require("./CreateCategoryUseCase");

let createCategoryUseCase;
let categoriesRepositoryInMemory;
describe("Create Category", () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new _repositories.CategoriesRepositoryInMemory();
    createCategoryUseCase = new _CreateCategoryUseCase.CreateCategoryUseCase(categoriesRepositoryInMemory);
  });
  it("should be able to create a new category", async () => {
    const category = {
      name: "category test",
      description: "category description test"
    };
    await createCategoryUseCase.execute(category);
    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);
    expect(categoryCreated).toHaveProperty("id");
  });
  it("should not be able to create a new category if name already exists", async () => {
    const category = {
      name: "category test",
      description: "category description test"
    };
    await createCategoryUseCase.execute(category);
    const promise = createCategoryUseCase.execute(category);
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Category Already exists!"));
  });
});