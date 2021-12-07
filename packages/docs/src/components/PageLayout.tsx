import Navbar from "./Navbar";
import React from "react";
import VerticalSidebar from "../components/VerticalSidebar";
import { Sidebar, Spacer } from "growth-ui-react";

const PageLayout: React.FC = ({ children }) => {
  return (
    <Sidebar.Pushable style={{ height: "100%" }}>
      <VerticalSidebar visible />
      <Sidebar.Pusher>
        <Navbar />
        <Spacer size={50} />
        {children}
        <Spacer size={100} />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

export default PageLayout;
