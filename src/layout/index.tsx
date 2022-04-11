import React, { FC } from "react";
import Header from "../components/Header";
type typeChildren = {
  children: React.ReactNode;
};
const Layout: FC<typeChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
