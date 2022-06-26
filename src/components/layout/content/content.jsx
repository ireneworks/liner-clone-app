import React from "react";
import { Outlet } from "react-router-dom";
import "./content.scss";

export default function Content() {
  return (
    <div className="content-wrapper">
      <Outlet />
    </div>
  );
}
