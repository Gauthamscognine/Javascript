const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

const itemRoutes = require("./routes/itemRoutes");
const productRoutes = require("./routes/productRoutes")
const userRoutes= require('./routes/userRoutes')

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});// this is application level middleware , used for global access middleware 



// app.use(express.static("public"));

// attach router
app.use('/user',userRoutes)
app.use("/products",productRoutes)
app.use("/items", itemRoutes);// any thing extra from /items , send it to itemsrouter 

// const storage = multer.diskStorage({// this says where to store the file on disk
//     destination: "uploads/",//where to save the file 
//     filename: (req, file, cb) => {//used to save the filename, cb is a call back ,req is the incoming file  date.now gives the current time in milliseconds , and file is the meta data of the file 
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });// this is for diskstorage , if u give nothing then it will store in memorty stirage which is temporary storage

const upload = multer();//multer instance 

app.post("/upload", upload.single("file"), (req, res) => {// .single means can expect one incoming file , 
    res.json({
        message: "File uploaded successfully",
        file: req.file
    });
});



// start server
app.listen(3030, () => {
    console.log("Server running on http://localhost:3030");
});
