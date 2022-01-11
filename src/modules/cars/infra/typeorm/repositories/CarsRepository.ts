import { getRepository, Repository } from "typeorm";

import { ICreateCarDTO } from "@/modules/cars/dtos";
import { ICarsRepository } from "@/modules/cars/repositories";

import { Car } from "../entities";

export class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    create(data: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create(data);
        return this.repository.save(car);
    }
    findByLicensePlate(license_plate: string): Promise<Car> {
        return this.repository.findOne({ license_plate });
    }
}
