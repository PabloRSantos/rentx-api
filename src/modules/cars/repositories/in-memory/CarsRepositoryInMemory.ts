import { ICarsRepository } from "..";

import { ICreateCarDTO } from "../../dtos";
import { Car } from "../../infra/typeorm/entities";

export class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    async create(data: ICreateCarDTO): Promise<Car> {
        const car = new Car();
        Object.assign(car, data);

        this.cars.push(car);

        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car> {
        return this.cars.find((car) => car.license_plate === license_plate);
    }
}
