require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = pool;















// A pool means:
// “Keep a small number of database connections open and reuse them.”

// // this mainly does 4 things , 
// 1. this makes a tcp connection 
// 2.authenticates using the username and password 
// // 3. selects the databse 
// // 4.queries get executed

// the defualt pool size is 10 . 


// we cn also have diffrent id and passwrods , which is common like we have admins , only readonly access , for them we can create diffrent files such as dbreadonly.js and dbAdmin .js and then use them according to  the requires access , like admin will be for update deleet and add  and read only will be for select and reading of emp bason on emp or anything else
