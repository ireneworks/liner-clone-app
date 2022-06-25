import React from "react";
import "./layout.scss";
import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Content from "./content/content";

export default function Layout({ onSearch }) {
  return (
    <div className="layout-wrapper">
      <Header onSearch={onSearch} />
      <Content>
        <Outlet />
      </Content>
    </div>
  );
}
