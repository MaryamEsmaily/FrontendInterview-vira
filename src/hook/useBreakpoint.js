import { useMediaQuery, useTheme } from "@chakra-ui/react";

const useBreakpoint = () => {
  const { breakpoints } = useTheme();
  const [base, sm, md, lg, xl, xxl] = useMediaQuery(
    Object.values(breakpoints)?.map((bp) => `(min-width: ${bp})`)
  );

  return { base, sm, md, lg, xl, xxl };
};

export default useBreakpoint;
