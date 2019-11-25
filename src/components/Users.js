import React from "react";
import User from "./User.js";

const Users = (props) => {
  return props.users.map((item) => (
    <User
      key={item.id}
      name={item.name}
      email={item.email}
      terms={item.terms}
    />
  ));
};

export default Users;
