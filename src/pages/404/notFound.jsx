import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      404 Page Not Found
      <Link to="/">
        <button>Go to Home</button>
      </Link>
    </>
  );
}
