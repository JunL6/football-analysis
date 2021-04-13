export const dateStringToDate = (dateString: string):Date => {
    const dateParts:Array<number> = dateString
        .split("/")
        .map(datePart => parseInt(datePart));
    const day:number = dateParts[0];
    const month:number = dateParts[1];
    const year:number = dateParts[2];
    return new Date(year, month-1, day);
}

