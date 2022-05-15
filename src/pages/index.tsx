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
import Head from "next/head";
import Link from "next/link";
import { ReactElement } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { Layout } from "templates/Layout";
import { fetchPosts } from "utils/http";

export default function HomePage() {
  <Head>
    <title>Won Games</title>
    <link rel="shortcut icon" href="/img/icon-512.png" />
    <link rel="apple-touch-icon" href="/img/icon-512.png" />
    <meta name="description" content="The best Game Store in the world" />
  </Head>;

  const { data: posts, status } = useQuery("posts", fetchPosts);

  if (status === "error") {
    return "Something went wrong..";
  }

  return (
    <Stack spacing={6}>
      <Stack spacing={2}>
        <Heading as="h1">All posts</Heading>
        <Text color="gray.600">Dive deep to our collection of blog posts</Text>
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
