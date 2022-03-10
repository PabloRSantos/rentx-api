import { ICreateRentalDTO } from "../../dtos";
import { Rental } from "../../infra/typeorm/entities";
import { IRentalsRepository } from "../models";

export class RentalsRepositoryInMemory implements IRentalsRepository {
    rentals: Rental[] = [];

    async create(params: ICreateRentalDTO): Promise<Rental> {
        const rental = new Rental();

        Object.assign(rental, params, { start_date: new Date() });
        this.rentals.push(rental);

        return rental;
    }

    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.car_id === car_id && !rental.end_date
        );
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        return this.rentals.find(
            (rental) => rental.user_id === user_id && !rental.end_date
        );
    }
}
