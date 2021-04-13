import { HTMLReport } from './reporters/HTMLReport';
import { WinAnalyzer } from './analyzers/WinAnalyzer';
import { Summary } from './Summary';
import {CsvFileReader} from './CsvFileReader';
import {MatchReader} from './MatchReader';
import { ConsoleReport } from './reporters/ConsoleReport';

/* approach 1: inheritance  */
// const file = new MatchReader("football.csv");
// file.read();

/* approach 2: interface */
const csvFileReader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const teamName = "Leicester";

const winAnalyzer = new WinAnalyzer(teamName);
const consoleReporter = new ConsoleReport();
const HTMLReporter = new HTMLReport();
const summary = new Summary(winAnalyzer, HTMLReporter);
summary.buildAndPrintReport(matchReader.matches);