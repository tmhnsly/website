import { Heading, Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";

interface CardLinkProps {
  href: string;
  eyebrow: string;
  heading: string;
  subheading?: string;
  imageUrl?: string;
}

const CardLink = ({
  href,
  eyebrow,
  heading,
  subheading,
  imageUrl = "https://placedog.net/800/640",
}: CardLinkProps) => {
  return (
    <Link href={href}>
      <Box
        style={{
          borderRadius: "var(--radius-6)",
          overflow: "hidden",
          position: "relative",
          aspectRatio: "4 / 3",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src={imageUrl}
            alt="Card background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Flex
          direction="column"
          justify="end"
          p="4"
          width="100%"
          gap={"3"}
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: "var(--color-panel)",
            backdropFilter: "var(--backdrop-filter-panel)",
          }}
        >
          <Heading size="3" weight="bold" color="gray">
            {eyebrow}
          </Heading>
          <Heading>{heading}</Heading>
          {subheading && <Heading size="3">{subheading}</Heading>}
        </Flex>
      </Box>
    </Link>
  );
};

export default CardLink;
