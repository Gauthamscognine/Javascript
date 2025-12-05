const express = require('express');
const pool = require("./db.js")

const app = express();
app.use(express.json());

app.get('/employees',async (req,res)=>{
    try{
        const result = await pool.query("select * from employees");
        return res.json(result.rows);
    }catch(err){
        res.status(500).send("err.message");
    }

});

app.get('/employees/:id',async (req,res)=>{
    const {id}= req.params;
    try{
        const result = await pool.query("select * from employees where id  =$1",[id]);
        if(result.rows.length===0){
            return res.status(404).send("employyes not found with that id ");
        }
        res.json(result.rows[0]);
    }
    catch(err){
        res.status(500).send(err.message);
    }
});


app.listen(5000,()=>{
    console.log('Server running on port 5000');
})