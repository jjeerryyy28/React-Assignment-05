import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("https://randomuser.me/api/?results=30")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setUsers(data.results);
      })
      .catch(() => {});
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>User Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo autem
        non deserunt consectetur, natus itaque maiores nobis quaerat illum
        maxime architecto officiis quos vero quam quasi libero minima possimus
        provident. Et dolore aut distinctio dolores, dolorem impedit cumque
        doloremque aspernatur!
      </p>
      <button onClick={getUsers}>Get Users</button>

      {users.length > 0 && (
        <table width="100%" frame="box" rules="all">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody align="center">
            {users.map((ele, index) => (
              <tr key={index}>
                <td>
                  <img src={ele.picture.medium} alt="User" width="100" height="100" />
                </td>
                <td>
                  {ele.name.first} {ele.name.last}
                </td>
                <td>{ele.gender}</td>
                <td>{ele.email}</td>
                <td>{ele.location.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Users;
