import { useContext } from "react";
import { Link } from "react-router-dom"
import AuthContext from "../AuthContext";


export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div
      style={{
        padding: "32px 0",
        display: "flex",
        gap: "16px",
        alignItems: "center",
      }}
    > 
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      {user ? <Link to={"/profile"}>Profile</Link> : null}

      <button style={{ padding: "6px 12px" }} onClick={user ? logout : login}>
        {user ? "Logout" : "Login"}
      </button>
    </div>
  );
}