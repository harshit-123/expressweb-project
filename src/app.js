const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

//setup the port no.
const PORT = process.env.PORT || 8000;



// public static Path
const staticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");


//set template engine handlebars
app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));


//setup the home page
app.get('/',(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})
//if page not found then show that
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg: 'Opps Page not found! Click here to go back'
    });
})

app.listen(PORT,()=>{
    console.log(`Connection Successfuly at Port no.${PORT}`);
})