const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("veiw engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home.ejs");
});

app.get("/rollDice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6) + 1;
    // res.render("rollDice.ejs",{num : diceVal});
    // res.render("rollDice.ejs",{ diceVal : diceVal});
    res.render("rollDice.ejs",{ diceVal});
});

app.get("/ig/:username", (req,res)=>{
    // const followers = ['adam','bob','abc','steve']
    let {username} = req.params;
     const instaData = require("./data.json");
     const data = instaData[username];
     if(data){
        res.render("instagram.ejs", {data :  instaData[username] });
     }else{
        res.render("error.ejs")
     }
    

});

app.listen(port, ()=>{
    console.log(`listening ot port ${port}`);
});



