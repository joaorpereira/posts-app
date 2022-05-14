import {
  Divider,
  Heading,
  Icon,
  Link as ChakraLink,
  Stack,
  Text
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useQuery } from "react-query";
import Author from "templates/Author";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

async function fetchPostById(id: string | string[] | undefined): Promise<Post> {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
}
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
      enabled: Boolean(id)
    }
  );

  if (status === "error") {
    return "Something went wrong..";
  }

  return (
    <Stack spacing={6}>
      <Link href="/" passHref>
        <ChakraLink color="blue.600">
          <Icon name="arrow-back" /> Back to posts
        </ChakraLink>
      </Link>
      <Stack spacing={4}>
        <Author userId={post?.userId} />
        <Heading as="h1" size="lg">
          {post ? post.title : <p>loading...</p>}
        </Heading>
        <Stack spacing={3}>
          {post ? (
            Array.from(Array(4), (_, index) => (
              <Text fontSize="lg" color="gray.600" key={index}>
                {post.body}
              </Text>
            ))
          ) : (
            <>loading...</>
          )}
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <main>{page}</main>;
};
