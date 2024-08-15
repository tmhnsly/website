import { Flex, Text } from "@radix-ui/themes";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "var(--gray-2)" }}>
      <Flex justify={"center"} align={"center"} px={"4"} py={"2"}>
        <Text size={"3"}>:)</Text>
      </Flex>
    </footer>
  );
};

export default Footer;
