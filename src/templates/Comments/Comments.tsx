import { Heading, Stack, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { fetchCommentsByPostId } from "utils/http";

export default function Comments() {
  const router = useRouter();
  const { id } = router.query;

  const { data: comments, status } = useQuery(
    ["comments", { id: id }],
    () => fetchCommentsByPostId(id),
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
    <Stack spacing={6}>
      <Heading as="h2" size="md">
        Comments
      </Heading>
      <Stack spacing={6}>
        {comments ? (
          comments.map((comment) => (
            <Stack
              key={comment.id}
              spacing={2}
              borderWidth={1}
              padding={2}
              paddingLeft={4}
              borderLeftWidth={6}
              borderLeftColor="blue.500"
              backgroundColor="gray.50"
              borderRadius="lg"
              boxShadow="sm"
            >
              <Text fontSize="sm">{comment.body}</Text>
              <Text fontSize="xs" color="gray.700">
                - {comment.email.split("@")[0]}
              </Text>
            </Stack>
          ))
        ) : (
          <>loading...</>
        )}
      </Stack>
    </Stack>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(["comments", id], () =>
    fetchCommentsByPostId(id)
  );

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
