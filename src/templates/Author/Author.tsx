import { Link as ChakraLink, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchAuthorById } from "utils/http";

export default function Author() {
  const router = useRouter();
  const { id } = router.query;

  const { data: author, status } = useQuery(
    ["author", id],
    () => fetchAuthorById(id),
    {
      enabled: Boolean(id)
    }
  );

  if (status === "error") {
    return <>Something went wrong..</>;
  }

  if (status === "loading") {
    return <>loading...</>;
  }

  return (
    <Text fontSize="sm" fontWeight="bold">
      {author ? (
        <Link href={`mailto:${author.email}`} passHref>
          <ChakraLink color="blue.700" textDecoration="underline" isExternal>
            Author: {author.name}
          </ChakraLink>
        </Link>
      ) : (
        <>loading...</>
      )}
    </Text>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["author", id], () => fetchAuthorById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};
