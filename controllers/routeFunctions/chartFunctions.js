const fs = require('fs');
const AWS = require('aws-sdk');
const excel = require('excel4node');
const config = require('../../config');

const s3 = new AWS.S3({
  accessKeyId: config.AWS_ACCESS_KEY,
  secretAccessKey: config. AWS_SECRET_ACCESS_KEY
});


function saveToS3(req, res) {
  fs.readFile(req.body.file, (err, data) => {
    if (err) {
      console.log('FILE READ ERROR', err);
      res.status(400).send(err);
    }
    console.log('file readed', data);
    const params = {
      Bucket: 'accounting-app-bucket',
      Key: '',
      Body: JSON.stringify(data, null, 2)
    };
  
    s3.upload(params, (s3Err, s3Data) => {
      if (s3Err) throw s3Err
      console.log(`File uploaded successfully at ${data.location}`);
    });

  });
}

function createExcelWorkbook(req, res) {
  console.log('\n\nCREATE EXCEL WORKBOOK HIT!\n\n')
  const workbook = new excel.Workbook();
  const ws = workbook.addWorksheet('sheet1');
  // workbook.writeToBuffer().then(buffer => {
  //   console.log('BUFFER', buffer);
  //   res.send(buffer)
  // });
  workbook.write('specialExcel.xlsx');
  res.sendFile(__dirname, '../../specialExcel.xlsx');
}




module.exports = { saveToS3, createExcelWorkbook }
