const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter

const __partToStore = __dirname + '/../../../store';

const fileExport = {
    exportExcel: async (data, sheetName) => {
        switch (sheetName) {
            case 'attendanceSummarySheet':
                const attendanceSummarySheet = require('.sheet/attendanceSummarySheet.js');
                const buf = attendanceSummarySheet(data);
                const blob = new Blob([buf], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                });
                fs.writeFileSync(__partToStore, blob)
        }
    }
}


module.exports = fileExport;