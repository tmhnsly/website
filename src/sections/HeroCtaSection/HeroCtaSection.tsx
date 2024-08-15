import { Section, Flex, Box, Heading, Button, Text } from "@radix-ui/themes";

interface HeroCtaSectionProps {
  heading: string;
  subheading: string;
  ctaText: string;
}

const HeroCtaSection = ({
  heading,
  subheading,
  ctaText,
}: HeroCtaSectionProps) => {
  return (
    <Section size={"4"}>
      <Flex direction={"column"} gap={"6"}>
        <Box>
          <Heading size={"9"} mb={"3"}>
            {heading}
          </Heading>
          <Text size={"6"} weight={"light"}>
            {subheading}
          </Text>
        </Box>
        <Box>
          <Button size={"3"}>
            <Text>{ctaText}</Text>
          </Button>
        </Box>
      </Flex>
    </Section>
  );
};

export default HeroCtaSection;
