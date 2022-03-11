import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

import { IDateAdapter } from "../models";

dayjs.extend(utc);

export class DayJsAdapter implements IDateAdapter {
    dateNow(): Date {
        return dayjs().toDate();
    }
    convertToUTC(date: Date): string {
        return dayjs(date).utc().local().format();
    }
    compareInHours(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date);
        const start_date_utc = this.convertToUTC(start_date);
        const compare = dayjs(end_date_utc).diff(
            dayjs(start_date_utc),
            "hours"
        );

        return compare;
    }

    compareInDays(start_date: Date, end_date: Date): number {
        const end_date_utc = this.convertToUTC(end_date);
        const start_date_utc = this.convertToUTC(start_date);
        const compare = dayjs(end_date_utc).diff(dayjs(start_date_utc), "days");

        return compare;
    }
}
