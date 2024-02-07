import { UserContext } from "../contexts/user";
import { useContext } from "react";
import { Avatar } from "@mui/material";

export default function UserInfo() {
  const { user } = useContext(UserContext);
  return (
    <div className="user-div">
      <Avatar src={user.avatar_url} />
      <p>{user.username}</p>
    </div>
  );
}
