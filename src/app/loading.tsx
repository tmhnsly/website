import { Flex, Spinner } from "@radix-ui/themes";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Flex align={"center"} justify={"center"} height={"100%"} width={"100%"}>
      <Spinner size={"3"} />
    </Flex>
  );
}
