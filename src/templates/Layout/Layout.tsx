import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type PageProps = {
  children: ReactNode;
};

export default function Layout({ children }: PageProps) {
  return (
    <Flex
      as="main"
      width="100%"
      padding={["80px 56px", "80px 100px", "80px 180px", "80px 180px"]}
    >
      {children}
    </Flex>
  );
}
