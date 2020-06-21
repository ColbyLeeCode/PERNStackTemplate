const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const GoogleStrat = require("passport-google-oauth").OAuth2Strategy;
const pool = require("./db");
const keys = require("./keys/authkeys");
const chalk = require("chalk");
let user = {};

//middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

passport.serializeUser((user, cb) =>{
    cb(null, user);
});

passport.deserializeUser((user, cb) =>{
    cb(null, user);
});

//Authorization Strat for Google Login
passport.use(new GoogleStrat ({
    clientID: keys.GOOGLE.clientID,
    clientSecret: keys.GOOGLE.clientSecret,
    callbackUrl: "/auth/google/callback"
},
    (accessToken, refreshToken, profile, cb) => {
        console.log(chalk.blue(JSON.stringify(profile)));
        user = { ...profile };
        return cb(null, profile);
    }
));


//ROUTES//
//Login routes used to authenticate user with Google Sign on
app.get("/auth/google", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("/auth/google/callback",
    passport.authenticate(("google"), (req, res) => {
        res.redirect("/board");
    }));

app.get("/auth/logout", (req, res) => {
    console.log("logging out!");
    user = {};
    res.redirect("/"); 
})




//create a todo
app.post("/todos", async(req,res) => {
    try{
        const {description } = req.body;
        const newTodo = await pool.query(
        "INSERT INTO todo (description) VALUES($1) RETURNING *", 
        [description]
        );
        res.json(newTodo.rows[0]);        
    } catch(err){
        console.error(err.message);
    }
})

//get all todos
app.get("/todos", async(req, res) => {
    try{
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo
app.get("/todos/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch(err){
        console.error(err.message);
    }
});

//update a todo
app.put("/todos/:id", async(req,res) => {
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);    

        res.json("Todo was updated!");
    } catch(err){
        console.error(err.message);
    }
});

//delete a todo
app.delete("/todos/:id", async(req,res) => {
    try{
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo was deleted");
       
    } catch(err){
        console.error(err.message);
    }
});

app.listen(5000, () => {
    console.log("server has started on port 5000");
});