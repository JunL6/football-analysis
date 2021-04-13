import fs from "fs";

export class CsvFileReader {
    public data:string[][] = [];

    constructor(public path:string) {}

    public read(): void{
        this.data = fs
        .readFileSync(this.path, 
            {encoding: "utf-8"}
        )
        .split("\n")
        .map((row: string): string[] => row.split(','))
        
    }
}