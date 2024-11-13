import React, { useContext } from "react";
import { Authcontect } from "../Providers/Authprovider";
import { Navigate } from "react-router-dom";

const Privetrouter = ({ children }) => {
  const { user, logding } = useContext(Authcontect);
  if (logding) {
    return <span className="loading loading-spinner text-warning"></span>;
  }
  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default Privetrouter;
