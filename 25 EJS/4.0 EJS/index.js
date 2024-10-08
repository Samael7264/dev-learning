import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];

function weekdayGreeting(day){
    if(day === "Sunday"|| day ==="Saturday"){
        return "Hey. It's the Weekend, it's time to have fun."
    } else{
        return "Hey.  It's a Weekday, it's time to work hard."
    }
}

var greeting = weekdayGreeting(day);
// function checkPassword(password){
//     if(password === "ILoveProgramming"){
//         return __dirname + "/public/secret.html";
        
//     } else{
//         return __dirname + "/public/index.html";      

//     }
// };

// app.use(bodyParser.urlencoded({extended:true}));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// });

app.get("/", (req, res) => {
    res.render("index.ejs",{greeting})
  });



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
