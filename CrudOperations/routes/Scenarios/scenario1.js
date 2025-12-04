const expresss = require('express');

const app = expresss();

app.get('/combinedOutput', async (req ,res)=>{
    try{
        const[userReq,postReq] = await  Promise.all([
            fetch("https://jsonplaceholder.typicode.com/users/9"),
            fetch("https://jsonplaceholder.typicode.com/posts/3")
        ]);

        const user = await userReq.json();
        const post = await postReq.json();

        const response = {
            user,
            post
        }

        res.json(response)

    }
    catch(error){
        res.status(500).json({
            message:"Error fetching data from the typicode website ",
            error:error.message
        });
    }
});
app.listen(3009,()=>{
        console.log("app is listening at http://localhost:3009");
    });
