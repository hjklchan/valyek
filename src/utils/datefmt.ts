import moment from "moment"

export const datefmtCheckNull = (date: Date): string => {
    if (date === null) return "No date";
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
}
