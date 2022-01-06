const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const pdf = require("./pdf");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", (req, res) => {
  const myJSON = JSON.stringify(req.body);
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Dispoition": "attachment:filename=data.pdf",
  });
  pdf.createPDF(
    (chunk) => stream.write(chunk),
    () => stream.end(),
    myJSON
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
