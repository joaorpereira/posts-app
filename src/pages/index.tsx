import {
  Divider,
  Heading,
  Link as ChakraLink,
  List,
  ListItem,
  Stack,
  Text
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchPosts } from "utils/http";

const Layout = dynamic(() => import("../templates/Layout/Layout"));

export default function HomePage() {
  const { data: posts, status } = useQuery("posts", fetchPosts);

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
        <Stack spacing={2}>
          <Heading as="h1">All posts</Heading>
          <Text color="gray.600">
            Dive deep to our collection of blog posts
          </Text>
        </Stack>
        <Divider />
        <List spacing={4}>
          {posts ? (
            posts.map((post) => (
              <ListItem key={post.id}>
                <Link href={`/post/${post.id}`} passHref>
                  <ChakraLink color="blue.600">{post.title}</ChakraLink>
                </Link>
              </ListItem>
            ))
          ) : (
            <>loading...</>
          )}
        </List>
      </Stack>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("posts", fetchPosts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
