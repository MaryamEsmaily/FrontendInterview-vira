import { Box, Stack } from "@chakra-ui/react";
import MenuBar from "constant/MenuBar";
import React from "react";

function AppLayoutNavbar() {
  return (
    <Box py={5} px={8} bg="gray.100" boxShadow="sm">
      <Stack
        direction="row"
        justifyContent={{ base: "space-around", lg: "start" }}
        align="start"
        spacing={5}
      >
        {MenuBar?.map((menuItem) => {
          const Icon = menuItem.icon;
          return (
            <Stack
              direction={{ base: "column", lg: "row" }}
              align="center"
              key={menuItem.key}
            >
              {Icon && <Icon boxSize={4} />}
              <Box fontSize="sm">{menuItem.name}</Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
}

export default AppLayoutNavbar;
