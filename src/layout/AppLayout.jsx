// package import
import React from "react";
// own component import
import AppLayoutProvider from "provider/AppLayoutProvider";
import AppLayoutMain from "container/layout/AppLayout/AppLayoutMain";
import AppLayoutNavbar from "container/layout/AppLayout/AppLayoutNavbar";

function AppLayout({ children }) {
  //
  return (
    <AppLayoutProvider>
      <AppLayoutNavbar />
      <AppLayoutMain>{children}</AppLayoutMain>
    </AppLayoutProvider>
  );
}

export default React.memo(AppLayout);
