//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function checkPassword(password){
    if(password === "ILoveProgramming"){
        return __dirname + "/public/secret.html";
        
    } else{
        return __dirname + "/public/index.html";      

    }
};

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req, res) => {
    res.sendFile(checkPassword(req.body.password));
});



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
