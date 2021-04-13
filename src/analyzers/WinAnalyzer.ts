import { MatchData } from './../MatchData';
import { Analyzer } from "../Summary";
import { MatchResult } from '../MatchResult';


export class WinAnalyzer implements Analyzer {
    constructor(public teamName:string) {}

    run(matches: MatchData[]):string {
        let wins = 0;
        let totalMatches = 0;

        for (let match of matches) {
            if(match[1] === this.teamName || match[2] === this.teamName) totalMatches++;
            if(match[1] === this.teamName && match[5] === MatchResult.HomeWin) {
                wins++;
            } else if(match[2] == this.teamName && match[5] == MatchResult.AwayWin) {
                wins++;
            }
        }

        return `${this.teamName} has won ${wins}/${totalMatches} games.`;
    }
}