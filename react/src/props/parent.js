import React from "react";
import UserCard from "./UserCard";

function Parent() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Demo — Parent to Child and Child to Demo</h1>
      <UserCard 
        name="Gautham"
        role="Software Developer"
        location="Hyderabad"
        onGreet= {()=> alert("hello , this is gautham")}
      />

      <UserCard 
        name="Rohit"
        role="Frontend Engineer"
        location="Bangalore"
        onGreet= {()=> alert("hello , this is rohit ")}

      />

      <UserCard 
        name="Sachin"
        role="Full Stack Developer"
        location="Mumbai"
        onGreet= {()=> alert("hello , this is Sachin")}
      />
    </div>
  );
}

export default Parent;
