
const ExcelJS = require('exceljs');

const attendanceSummarySheet = async (
    data,
    fileName
) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Bảng Giờ Công");
    worksheet.font = {
        name: "Arial",
        size: 10,
    };

    const row1 = worksheet.addRow(["Đơn vị: DTC Software"]);
    const row2 = worksheet.addRow(["Địa chỉ: "]);
    const title = worksheet.addRow(["TỔNG HỢP CHẤM CÔNG"]);
    const timeTitle = worksheet.addRow(["Từ ngày  đến ngày"]);
    const row5 = worksheet.addRow([]);
    const header = worksheet.addRow([
        "STT",
        "Mã nhân viên",
        "Tên nhân viên",
        "Phòng ban",
        "Chức vụ",
        "Ngày vào làm",
        "Tổng công/Tháng",
        "Ngày công",
        "",
        "",
        "Giờ công",
        "",
        "",
        "Vào trễ",
        "",
        "Ra sớm",
        "",
        "Tăng ca",
        "",
        "",
        "Vắng KP",
        "Ngày nghỉ",
    ]);
    const headerChildren = worksheet.addRow([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Thường",
        "C.Tuần",
        "Q.Đêm",
        "Thường",
        "C.Tuần",
        "Q.Đêm",
        "Lần",
        "Phút",
        "Lần",
        "Phút",
        "TC1",
        "TC2",
        "TC3",
        "",
        "OM",
        "TS",
        "R",
        "Ro",
        "P",
        "F",
        "CO",
        "CD",
        "H",
        "CT",
        "Le",
    ]);

    worksheet.mergeCells("A1:AF1");
    worksheet.mergeCells("A2:AF2");
    worksheet.mergeCells("A3:AF3");
    worksheet.mergeCells("A4:AF4");
    worksheet.mergeCells("A6:A7");
    worksheet.mergeCells("B6:B7");
    worksheet.mergeCells("C6:C7");
    worksheet.mergeCells("D6:D7");
    worksheet.mergeCells("E6:E7");
    worksheet.mergeCells("F6:F7");
    worksheet.mergeCells("G6:G7");
    worksheet.mergeCells("H6:J6");
    worksheet.mergeCells("K6:M6");
    worksheet.mergeCells("N6:O6");
    worksheet.mergeCells("P6:Q6");
    worksheet.mergeCells("R6:T6");
    worksheet.mergeCells("V6:AF6");
    worksheet.mergeCells("U6:U7");

    headerChildren.height = 40;
    const table = worksheet.addTable({
        name: "MyTable",
        ref: "A8",
        headerRow: false,
        totalsRow: false,
        style: {
            showRowStripes: true,
            border: {
                top: { style: "thin", color: { argb: "000000" } },
                left: { style: "thin", color: { argb: "000000" } },
                right: { style: "thin", color: { argb: "000000" } },
                bottom: { style: "thin", color: { argb: "000000" } },
            },
        },
        columns: [
            { name: "A" },
            { name: "B" },
            { name: "C" },
            { name: "D" },
            { name: "E" },
            { name: "F" },
            { name: "G" },
            { name: "H" },
            { name: "I" },
            { name: "J" },
            { name: "K" },
            { name: "L" },
            { name: "M" },
            { name: "N" },
            { name: "O" },
            { name: "P" },
            { name: "Q" },
            { name: "R" },
            { name: "S" },
            { name: "T" },
            { name: "U" },
            { name: "V" },
            { name: "W" },
            { name: "X" },
            { name: "Y" },
            { name: "Z" },
            { name: "AA" },
            { name: "AB" },
            { name: "AC" },
            { name: "AD" },
            { name: "AE" },
            { name: "AF" },
        ],
        rows: [],
    });
    title.eachCell((cell) => {
        cell.style = {
            alignment: { vertical: "middle", horizontal: "center", wrapText: true },
            font: {
                size: 14,
                bold: true,
            },
        };
    });

    const headerRow = [headerChildren, header];
    _.forEach(headerRow, (row) => {
        row.eachCell((cell) => {
            cell.style = {
                font: {
                    size: 10,
                    bold: true,
                },
                alignment: { vertical: "middle", horizontal: "center", wrapText: true },
                border: {
                    top: { style: "thin", color: { argb: "000000" } },
                    left: { style: "thin", color: { argb: "000000" } },
                    right: { style: "thin", color: { argb: "000000" } },
                    bottom: { style: "thin", color: { argb: "000000" } },
                },
            };
        });
    });

    const buf = await workbook.xlsx.writeBuffer();
    return buf;
};

module.exports = attendanceSummarySheet;