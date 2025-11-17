import React from "react";

function UserCard({ name, role, location , joining = 2005  , onGreet}) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      width: "320px",
      boxShadow: "0px 0px 8px rgba(0,0,0,0.1)"
    }}>
      <h2>{name}</h2>
      <p><b>Role:</b> {role}</p>
      <p><b>Location:</b> {location}</p>
      <p><b>Location:</b> {location}</p>
      <p><b>Joined on :</b> {joining}</p>
      <button onClick={onGreet}>Click me </button>
    </div>
  );
}

export default UserCard;
