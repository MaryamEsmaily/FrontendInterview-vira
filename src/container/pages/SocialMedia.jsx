import { Box, Stack } from "@chakra-ui/react";
import InstaIcon from "components/icon/InstaIcon";
import ShareIcon from "components/icon/ShareIcon";
import TelegramIcon from "components/icon/TelegramIcon";
import WhatsAppIcon from "components/icon/WhatsAppIcon";
import React from "react";

function SocialMedia() {
  return (
    <Box p={4} bg="gray.100" rounded="lg" fontWeight="bold" textAlign="center">
      <Box bg="white" rounded="lg" color="gray" fontWeight="light" p={3}>
        ما را در شبکه های اجتماعی دنبال کنید
      </Box>
      <Stack direction="row" justifyContent="center" spacing={4} mt={2}>
        {[
          { icon: InstaIcon },
          { icon: TelegramIcon },
          { icon: WhatsAppIcon },
          { icon: ShareIcon },
        ].map((item, index) => {
          const Icon = item?.icon;
          return (
            <Box key={index} bg="white" p={4} rounded="lg">
              {Icon && <Icon fill="gray" boxSize={30} />}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}

export default SocialMedia;
