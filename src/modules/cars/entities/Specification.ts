import { v4 as uuidv4 } from "uuid";

export class Specification {
    constructor() {
        if (!this.id) this.id = uuidv4();
    }

    id?: string;
    name: string;
    description: string;
    created_at: Date;
}
