"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HTMLReport_1 = require("./reporters/HTMLReport");
var WinAnalyzer_1 = require("./analyzers/WinAnalyzer");
var Summary_1 = require("./Summary");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reporters/ConsoleReport");
/* approach 1: inheritance  */
// const file = new MatchReader("football.csv");
// file.read();
/* approach 2: interface */
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var teamName = "Leicester";
var winAnalyzer = new WinAnalyzer_1.WinAnalyzer(teamName);
var consoleReporter = new ConsoleReport_1.ConsoleReport();
var HTMLReporter = new HTMLReport_1.HTMLReport();
var summary = new Summary_1.Summary(winAnalyzer, HTMLReporter);
summary.buildAndPrintReport(matchReader.matches);
