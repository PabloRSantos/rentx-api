"use strict";

var _dayjs = _interopRequireDefault(require("dayjs"));

var _repositories = require("../../../cars/repositories");

var _helpers = require("../../../../shared/helpers");

var _implementations = require("../../../../shared/infra/date/implementations");

var _inMemory = require("../../repositories/in-memory");

var _car = require("../../test/mocks/car");

var _rental = require("../../test/mocks/rental");

var _CreateRentalUseCase = require("./CreateRentalUseCase");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let createRentalUseCase;
let rentalsRepositoryInMemory;
let carsRepositoryInMemory;
let dayJsAdapter;
describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new _inMemory.RentalsRepositoryInMemory();
    carsRepositoryInMemory = new _repositories.CarsRepositoryInMemory();
    dayJsAdapter = new _implementations.DayJsAdapter();
    createRentalUseCase = new _CreateRentalUseCase.CreateRentalUseCase(rentalsRepositoryInMemory, dayJsAdapter, carsRepositoryInMemory);
  });
  it("should be able to create a new rental", async () => {
    const car = await carsRepositoryInMemory.create((0, _car.makeCar)());
    const rental = await createRentalUseCase.execute((0, _rental.makeRental)({
      car_id: car.id
    }));
    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });
  it("should not be able to create a new rental if there is another open to the same user", async () => {
    const car = await carsRepositoryInMemory.create((0, _car.makeCar)());
    await createRentalUseCase.execute((0, _rental.makeRental)({
      car_id: car.id
    }));
    const promise = createRentalUseCase.execute((0, _rental.makeRental)({
      car_id: car.id
    }));
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Car is unavailable"));
  });
  it("should not be able to create a new rental if there is another open to the same car", async () => {
    const car = await carsRepositoryInMemory.create((0, _car.makeCar)());
    await createRentalUseCase.execute((0, _rental.makeRental)({
      user_id: "234",
      car_id: car.id
    }));
    const promise = createRentalUseCase.execute((0, _rental.makeRental)({
      user_id: "567",
      car_id: car.id
    }));
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("Car is unavailable"));
  });
  it("should not be able to create a new rental if invalid return time", async () => {
    const promise = createRentalUseCase.execute((0, _rental.makeRental)({
      expected_return_date: (0, _dayjs.default)().toDate()
    }));
    await expect(promise).rejects.toEqual(new _helpers.BadRequestError("invalid return time!"));
  });
});