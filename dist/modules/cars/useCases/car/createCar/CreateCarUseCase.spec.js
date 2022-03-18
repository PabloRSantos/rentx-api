"use strict";

var _repositories = require("../../../repositories");

var _helpers = require("../../../../../shared/helpers");

var _mocks = require("../../../test/mocks");

var _CreateCarUseCase = require("./CreateCarUseCase");

let createCarUseCase;
let carsRepository;
describe("Create Car", () => {
  beforeEach(() => {
    carsRepository = new _repositories.CarsRepositoryInMemory();
    createCarUseCase = new _CreateCarUseCase.CreateCarUseCase(carsRepository);
  });
  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute((0, _mocks.makeCar)());
    expect(car).toHaveProperty("id");
  });
  it("should not be able to create a car with exists license plate", async () => {
    await createCarUseCase.execute((0, _mocks.makeCar)());
    const promise = createCarUseCase.execute((0, _mocks.makeCar)());
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Car already exists!"));
  });
  it("should be able to create a car with available true by default", async () => {
    const car = await createCarUseCase.execute((0, _mocks.makeCar)());
    expect(car.available).toBeTruthy();
  });
});