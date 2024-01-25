// WelcomePage.js
import React from "react";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to the Calendar App!</h1>
      <Link to="/calendar">
        <button>Go to Calendar</button>
      </Link>
    </div>
  );
};

export default WelcomePage;
