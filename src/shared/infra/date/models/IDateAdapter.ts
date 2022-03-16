export interface IDateAdapter {
    compareInHours(start_date: Date, end_date: Date): number;
    compareInDays(start_date: Date, end_date: Date): number;
    addDays(currentDate: Date, days: number): Date;
    convertToUTC(date: Date): string;
    dateNow(): Date;
}
