import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
  res.send("Hello World, This is Rahul");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
