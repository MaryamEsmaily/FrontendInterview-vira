import { QuestionIcon, QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Stack } from "@chakra-ui/react";
import BallIcon from "components/icon/BallIcon";
import React from "react";

function CategorySection() {
  return (
    <>
      <Stack
        direction="row"
        spacing={2}
        p={4}
        mt={2}
        bg="gray.100"
        rounded="md"
      >
        {[
          { title: "زنانه" },
          { title: "مردانه" },
          { title: "مو" },
          { title: "ماساژ" },
        ].map((item, index) => (
          <Box
            key={index}
            color="gray"
            bg="white"
            fontSize="sm"
            px={5}
            py={2}
            rounded="lg"
          >
            {item.title}
          </Box>
        ))}
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        p={4}
        mt={2}
        bg="gray.100"
        rounded="md"
        overflowX="auto"
      >
        {[
          { title: "درباره ما", icon: QuestionOutlineIcon },
          { title: "راهنما", icon: QuestionIcon },
          { title: "قوانین", icon: QuestionIcon },
          { title: "پشتیبانی", icon: BallIcon },
        ].map((item, index) => {
          const Icon = item.icon;
          return (
            <Box
              key={index}
              color="gray"
              bg="white"
              fontSize="sm"
              px={5}
              py={2}
              rounded="lg"
              whiteSpace="nowrap"
            >
              <Stack direction="row" align="center">
                <Icon fill="gray" boxSize={4} />
                <Box>{item.title}</Box>
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default CategorySection;
