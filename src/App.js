import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  // Manage the state of users array / users added
  const [usersList, setUsersList] = useState([]);

  // Handler that creates an object for every user and adds that to the users array
  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    // React fragments as a wrapper, can also use <></>
    <React.Fragment>
      {/* Connection with AddUser component to receive the user data added */}
      <AddUser onAddUser={addUserHandler} />
      {/* Forwards the users array to UsersList component via props */}
      <UsersList users={usersList} />
    </React.Fragment>
  );
}

export default App;
