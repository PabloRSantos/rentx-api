"use strict";

var _repositories = require("@/modules/cars/repositories");

var _helpers = require("@/shared/helpers");

var _mocks = require("../../../test/mocks");

var _CreateCarSpecificationUseCase = require("./CreateCarSpecificationUseCase");

let createCarSpecificationUseCase;
let carsRepositoryInMemory;
let specificationsRepositoryInMemory;
describe("Create Car Specification", () => {
  beforeEach(() => {
    specificationsRepositoryInMemory = new _repositories.SpecificationsRepositoryInMemory();
    carsRepositoryInMemory = new _repositories.CarsRepositoryInMemory();
    createCarSpecificationUseCase = new _CreateCarSpecificationUseCase.CreateCarSpecificationUseCase(carsRepositoryInMemory, specificationsRepositoryInMemory);
  });
  it("should not be able to add a new specification to a now-existent car", async () => {
    const request = {
      car_id: "1234",
      specifications_id: []
    };
    const promise = createCarSpecificationUseCase.execute(request);
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Car does not exists!"));
  });
  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create((0, _mocks.makeCar)());
    const specification = await specificationsRepositoryInMemory.create((0, _mocks.makeSpecification)());
    const request = {
      car_id: car.id,
      specifications_id: [specification.id]
    };
    const specificationsCars = await createCarSpecificationUseCase.execute(request);
    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications).toHaveLength(1);
  });
});