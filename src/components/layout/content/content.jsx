import React from "react";
import { Outlet } from "react-router-dom";
import QuickMenu from "../aside/aside";
import "./content.scss";

export default function Content() {
  return (
    <div className="content-wrapper">
      <div className="main-content-wrapper">
        <Outlet />
      </div>
      <aside className="right-side-wrapper">
        <QuickMenu />
      </aside>
    </div>
  );
}
