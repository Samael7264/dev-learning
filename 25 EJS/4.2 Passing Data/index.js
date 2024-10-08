import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
  
});

function char(fName, lName){
  var Name = fName + lName;
  return Name.length;
}

app.post("/submit", (req, res) => {
  var leng = char(req.body["fName"],req.body["lName"]);
  console.log(leng);
  res.render("index.ejs", {len: leng});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
