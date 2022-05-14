import { Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "react-query";

const BASE_URL = "https://jsonplaceholder.typicode.com";

type Props = {
  userId?: string;
};

type Author = {
  email: string;
  name: string;
};

async function fetchAuthorById(
  id: string | string[] | undefined
): Promise<Author> {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
}

function Author({ userId }: Props) {
  const { data: author, status } = useQuery(
    ["author", userId],
    () => fetchAuthorById(userId),
    {
      enabled: Boolean(userId)
    }
  );

  if (status === "error") {
    return null;
  }

  return (
    <Text fontSize="sm">
      {author ? (
        <Link href={`mailto:${author.email}`} passHref>
          <ChakraLink color="blue.700" textDecoration="underline" isExternal>
            {author.name}
          </ChakraLink>
        </Link>
      ) : (
        <>loading...</>
      )}
    </Text>
  );
}

export default Author;
