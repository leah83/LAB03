const express=require('express');


//creating app
const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const session=require('express-session');
app.use(session({secret:'some secret code'}));


//make the app listen on port
const port=process.argv[2]||process.env.PORT||3000;
const server=app.listen(port,()=>{
    console.log(`Cart app listening at http//localhost:${port}`);
});

const router=require('./apis/routes');
app.use(router);

//handling static HTML and EJS templates
app.use(express.static('public'));
app.set('view engine','ejs');
app.get("/",(req,res)=>{
    res.render("index"); //no need for ejs extension
})

//route for contacts
app.get('/contacts',(req,res)=>{
    res.render('contacts');
});

app.get('/catalogue',(req,res)=>{
    res.render('catalogue');
});

app.get('/article',(req,res)=>{
    res.render('article/:id');
});

app.get('/register',(req,res)=>{
    res.render('register');
});

app.get('/login',(req,res)=>{
    res.render('login');
});

app.get('/client',(req,res)=>{
    res.render('client');
});




