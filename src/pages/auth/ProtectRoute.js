import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProRouter = ({ children }) => {
  let { user } = useSelector((store) => store.tracker);
  if (!user) {
    return <Navigate to={"/"} />;
  }

  return <div>{children}</div>;
};

export default ProRouter;
