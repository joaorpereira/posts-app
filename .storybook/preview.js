import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../src/styles/theme";

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  )
];
