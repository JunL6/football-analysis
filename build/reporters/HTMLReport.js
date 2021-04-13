"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReport = void 0;
var fs_1 = __importDefault(require("fs"));
var HTMLReport = /** @class */ (function () {
    function HTMLReport() {
    }
    HTMLReport.prototype.print = function (output) {
        var html = "\n            <html>\n                <h1>Football Analysis</h1>\n                <div>" + output + "</div>\n            </html>\n        ";
        fs_1.default.writeFileSync("report.html", html);
    };
    return HTMLReport;
}());
exports.HTMLReport = HTMLReport;
