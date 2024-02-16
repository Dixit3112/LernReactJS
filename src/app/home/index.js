import React from "react";
import "./herobanner.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="herobanner-main">
      <div className="container">
        <div className="herobanner">
          <h1>
            welcome to Interior <span>Ideas</span>
          </h1>
          <Link to="/form">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
