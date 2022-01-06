const PDFDocument = require("pdfkit");

function createPDF(dataCallback, endCallback, data) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);
  doc.fontSize(25).text(data);
  doc.end();
}

module.exports = { createPDF };
