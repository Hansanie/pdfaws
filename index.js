const PDFDocument = require('pdfkit');
const fs = require('fs');

console.log("hello");

exports.handler = async function (event, context) {

    console.log("Started");
    console.log("Started1");

    const doc = new PDFDocument({ size: "A4" });
    console.log("got font size");
    doc.pipe(fs.createWriteStream('.pdf'));
    doc.fontSize(16);
    console.log("got font size");
    doc.text("Hello World");
    doc.end();
    const data = fs.readFileSync('.pdf');
   
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/pdf",
            'Content-Disposition': 'inline; filename=test.pdf'  // key of success
        },
        body: data.toString('base64'),
        isBase64Encoded: true
    };
    console.log(data.toString('base64'));
    return data.toString('base64');
}
