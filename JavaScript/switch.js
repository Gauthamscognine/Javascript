let age = 21
/*👉 No, semicolons are not strictly required in JavaScript,
because of a feature called Automatic Semicolon Insertion (ASI).*/
switch (age){
    case age=18:
        console.log("you are eligible to vote ")
        break
    case 16:
        console.log("u r eligible to vote for central gov ")
        break;
    case 21:
        console.log("you are not eligible to vote ");{
            console.log("i hope u vote to a right person")
        }
        break;
    default:
        console.log("Yor are not a human , u belong to mars")
}


let i = 1;
do {
    console.log(i);
    i++;
}




















while(i<=5)