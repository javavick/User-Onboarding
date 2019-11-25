import React from "react";

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
      <p>{props.terms.toString()}</p>
    </div>
  );
};

export default User;
