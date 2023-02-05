import { Box } from "@chakra-ui/react";
import BallIcon from "components/icon/BallIcon";
import CategorySection from "container/pages/CategorySection";
import SocialMedia from "container/pages/SocialMedia";

function App() {
  return (
    <div className="App">
      <Box
        p={10}
        my={3}
        bg="gray.100"
        rounded="lg"
        color="green"
        fontWeight="bold"
        fontSize="lg"
        textAlign="center"
      >
        <Box>محل تبلیغات شما</Box>
      </Box>
      <SocialMedia />
      <CategorySection />
      <Box
        p={3}
        mt={2}
        bg="gray.100"
        fontSize="sm"
        fontWeight="bold"
        rounded="md"
      >
        <BallIcon fill="gray" /> برای برقراری ارتباط با پشتبانی از طریق تیکت{" "}
        <Box as="span" color="green">
          از اینجا اقدام کنید
        </Box>
        , و برای برقراری تماس تلفنی با پشتبانی
        <Box as="span" color="green">
          {" "}
          از اینجا اقدام کنید.
        </Box>
      </Box>

      <Box fontSize="xs" mt={5} textAlign="center">
        تمامی حقوق محفوظ و مربوط به{" "}
        <Box as="span" fontWeight="bold">
          راشین ویرا
        </Box>{" "}
        می باشد.۱۴۰۱
      </Box>
    </div>
  );
}

export default App;
