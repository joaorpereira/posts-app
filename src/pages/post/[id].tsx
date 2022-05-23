import {
  Divider,
  Heading,
  Icon,
  Link as ChakraLink,
  Stack,
  Text
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchPostById } from "utils/http";

const Comments = dynamic(() => import("../../templates/Comments/Comments"));
const Author = dynamic(() => import("../../templates/Author/Author"));
const Layout = dynamic(() => import("../../templates/Layout/Layout"));

export default function PostPage() {
  <Head>
    <title>Won Games</title>
    <link rel="shortcut icon" href="/img/icon-512.png" />
    <link rel="apple-touch-icon" href="/img/icon-512.png" />
    <meta name="description" content="The best Game Store in the world" />
  </Head>;

  const router = useRouter();
  const { id } = router.query;

  const { data: post, status } = useQuery(
    ["post", id],
    () => fetchPostById(id),
    {
      enabled: !!id
    }
  );

  if (status === "error") {
    return "Something went wrong..";
  }

  return (
    <>
      <Head>
        <title>News</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="The news channel in the world" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Stack spacing={6}>
        <Link href="/" passHref>
          <ChakraLink color="blue.600">
            <Icon name="arrow-back" /> Back to posts
          </ChakraLink>
        </Link>
        <Stack spacing={4}>
          <Author />
          <Heading as="h1" size="lg">
            {post ? `Title: ${post.title}` : <p>loading...</p>}
          </Heading>
          <Stack spacing={3}>
            {post ? (
              Array.from(Array(4), (_, index) => (
                <Text fontSize="lg" color="gray.600" key={index}>
                  {index + 1}. {post.body}
                </Text>
              ))
            ) : (
              <>loading...</>
            )}
          </Stack>
        </Stack>
        <Divider />
        <Comments />
      </Stack>
    </>
  );
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["post", id], () => fetchPostById(id));

  return {
    props: {
      id,
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
