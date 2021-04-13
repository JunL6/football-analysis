"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split("/")
        .map(function (datePart) { return parseInt(datePart); });
    var day = dateParts[0];
    var month = dateParts[1];
    var year = dateParts[2];
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
