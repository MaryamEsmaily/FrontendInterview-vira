// package import
import React from "react";
// own component import
import AppLayoutProvider from "provider/AppLayoutProvider";
import AppLayoutMain from "container/layout/AppLayout/AppLayoutMain";
import AppLayoutNavbar from "container/layout/AppLayout/AppLayoutNavbar";
import useBreakpoint from "hook/useBreakpoint";

function AppLayout({ children }) {
  //
  const { base, lg } = useBreakpoint();
  return (
    <AppLayoutProvider>
      {lg && <AppLayoutNavbar />}
      <AppLayoutMain>{children}</AppLayoutMain>
      {base && !lg && <AppLayoutNavbar />}
    </AppLayoutProvider>
  );
}

export default React.memo(AppLayout);
