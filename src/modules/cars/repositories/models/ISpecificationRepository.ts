import { ICreateSpecificationDTO } from "../../dtos";
import { Specification } from "../../entities";

export interface ISpecificationRepository {
    create(data: ICreateSpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
}
