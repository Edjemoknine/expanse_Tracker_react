import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import avatar from "../images/avatar.jpg";

const Header = () => {
  const { user } = useSelector((store) => store.tracker);
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };
  return (
    <div className="flex relative mb-3">
      <div>
        <div className="overflow-hidden w-12 h-12 rounded-full">
          {user.photoURL ? (
            <img
              className="w-full h-full object-cover"
              src={user?.photoURL}
              alt="profile"
            />
          ) : (
            <img
              className="w-full h-full object-cover"
              src={avatar}
              alt="profile"
            />
          )}
        </div>
      </div>
      <Button className="absolute text-xs right-0 top-0" onClick={handleLogout}>
        Sign Out
      </Button>
    </div>
  );
};

export default Header;
