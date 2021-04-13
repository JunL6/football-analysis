import fs from "fs";
import {dateStringToDate} from '../utils';
import {MatchResult} from '../MatchResult';


export abstract class CsvFileReader<T> {
    public data:T[] = [];

    constructor(public path:string) {}

    abstract mapRow(row:string[]): T;

    public read(): void{
        this.data = fs
        .readFileSync(this.path, 
            {encoding: "utf-8"}
        )
        .split("\n")
        .map((row: string): string[] => row.split(','))
        .map(this.mapRow)
    }



}