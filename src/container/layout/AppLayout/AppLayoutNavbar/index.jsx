import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import MenuBar from "constant/MenuBar";
import React, { useMemo } from "react";

function AppLayoutNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //
  const { isOpen: isCollapseOpen, onToggle } = useDisclosure();
  //
  const btnRef = React.useRef();

  const menuItems = useMemo(
    () =>
      MenuBar?.map((item) => {
        return {
          ...item,
          onClick: item.key === "category" ? onOpen : null,
        };
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      <Box
        py={5}
        px={8}
        bg="gray.100"
        boxShadow="sm"
        position="relative"
        zIndex={{ base: 9999, lg: "unset" }}
      >
        <Stack
          direction="row"
          justifyContent={{ base: "space-around", lg: "start" }}
          align="start"
          spacing={5}
        >
          {menuItems?.map((menuItem) => {
            const Icon = menuItem.icon;
            return (
              <Stack
                direction={{ base: "column", lg: "row" }}
                align="center"
                key={menuItem.key}
                onClick={() => {
                  if (menuItem?.onClick) menuItem?.onClick();
                }}
              >
                {Icon && <Icon boxSize={4} />}
                <Box fontSize="sm">{menuItem.name}</Box>
              </Stack>
            );
          })}
        </Stack>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          textAlign="center
        "
        >
          <DrawerHeader
            bg="green"
            display="flex"
            color="white"
            align="center"
            justifyContent="center"
            py={2}
          >
            <IconButton
              position="absolute"
              left={5}
              icon={<ArrowRightIcon />}
              variant="unstyled"
              size="sm"
              onClick={onClose}
            />
            <Box>دسته بندی </Box>
          </DrawerHeader>

          <DrawerBody px={3} mt={4}>
            <InputGroup>
              <Input
                variant="filled"
                placeholder="دسته بندی مورد نظر خود را جستجو کنید"
              />
              <InputRightElement
                sx={{
                  right: 0,
                  left: "unset",
                }}
              >
                <IconButton
                  variant="unstyled"
                  icon={<SearchIcon boxSize={5} />}
                />
              </InputRightElement>
            </InputGroup>

            <Box mt={5}>
              <Box
                border="1px solid green"
                textAlign="start"
                px={3}
                py={1}
                rounded="2xl"
              >
                <Box
                  onClick={() => {
                    onToggle();
                  }}
                >
                  <ArrowLeftIcon me={1} color="green" fontSize={10} />
                  زنانه
                  <Collapse in={isCollapseOpen} animateOpacity>
                    <Box>مانتو</Box>
                    <Box>شلوار</Box>
                    <Box>کفش</Box>
                  </Collapse>
                </Box>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AppLayoutNavbar;
