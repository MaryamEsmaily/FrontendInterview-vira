import { Box, Stack } from "@chakra-ui/react";
import MenuBar from "constant/MenuBar";
import React from "react";

function AppLayoutNavbar() {
  return (
    <Box py={5} px={8} boxShadow="sm">
      <Stack
        direction="row"
        justifyContent={{ base: "space-around", lg: "start" }}
        align="center"
        spacing={5}
      >
        {MenuBar.map((menuItem) => (
          <Stack direction={{ base: "column", lg: "row" }} key={menuItem.key}>
            <Box>Icon</Box>
            <Box>{menuItem.name}</Box>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default AppLayoutNavbar;
