import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function ProtectedRoute() {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    user ? <Outlet /> : <Navigate to={'/'} />
  )
}