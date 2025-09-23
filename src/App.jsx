import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [usersData, setUsersData] = useState(
    () => JSON.parse(localStorage.getItem("usersData")) || []
  );

  const [existingUser, setExistingUser] = useState([]);

  console.log("user ka data->", usersData);
  return (
    <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
      {toggle ? (
        <Login
          setToggle={setToggle}
          usersData={usersData}
          setExistingUser={setExistingUser}
        />
      ) : (
        <Register
          setToggle={setToggle}
          setUsersData={setUsersData}
          usersData={usersData}
        />
      )}
      {existingUser.length
        ? existingUser.map((elem) => (
            <div>
              <h1>Name- {elem.username}</h1>
              <p>Email - {elem.email}</p>
            </div>
          ))
        : "No users"}
    </div>
  );
};

export default App;
