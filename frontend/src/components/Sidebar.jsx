import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuthContext } from "../context/AuthContext";

const Sidebar = () => {
    const { authUser } = useAuthContext();

  return (
    <aside>
      <nav>
        <Link to="/">
          Github
        </Link>

        <Link to="/">
            Home
        </Link>

        {authUser && (
          <Link to="/likes">
            Likes
          </Link>
        )}

        {!authUser && (
          <Link to="/login">
            {/* // we'll place a "login" icon here, later Login */}
            Login
          </Link>
        )}

        {!authUser && (
          <Link to="/signup">
            {/* // we'll place a "signup" icon here, later Signup */}
            Signup
          </Link>
        )}

        {authUser && (
          <div>
            <Logout />
          </div>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
