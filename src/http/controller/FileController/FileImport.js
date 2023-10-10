const fs = require('fs');
const csvParser = require('csv-parser');

fs.createReadStream('duong-dan-den-file.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // Xử lý dữ liệu đã đọc ở đây, dữ liệu đã đọc sẽ lưu trong mảng 'results'
        console.log('Dữ liệu từ tệp CSV:', results);
    });