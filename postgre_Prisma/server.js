const prisma = require("./prismaClient");
const express = require("express");

const app = express();
app.use(express.json());

app.get('/employees',async (req,res)=>{
    try{
        const result= await prisma.employee.findMany();
        res.json(result);

    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});


app.listen(3456,()=>{
    console.log("running on 3456");
})
