import { useState, useEffect } from "react";
import { getAllUsers } from "../utils/api";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllUsers().then((response) => {
      setUsers(response.data.users);
      setIsLoading(false);
    });
  });
  if (isLoading) return <p>Loading users...</p>;
  return (
    <div className="users-div">
      <ul className="users-list">
        <h2 className="users-heading">Users</h2>
        {users.map((user) => {
          return (
            <li key={user.username} className="users-list-item">
              <h3>{user.name}</h3>
              <p>{user.username}</p>
              <img src={user.avatar_url} className="users-img" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
