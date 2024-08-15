import * as React from "react";
import {
  Badge,
  Box,
  Container,
  Heading,
  Section,
  Flex,
} from "@radix-ui/themes";
import { sanityFetch } from "../../../../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { formatDate } from "@/utils/dateUtils";
import { BiBulb } from "react-icons/bi";
import Image from "next/image";
import { urlFor } from "@/utils/sanityImageUtils";

const BLOG_POST_QUERY = `*[_type == 'blogPost' && slug.current == $slug][0]{
  _createdAt,
  title, 
  content,
  thumbnail
}`;

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await sanityFetch<SanityDocument>({
    query: BLOG_POST_QUERY,
    params,
  });

  const { title, content, _createdAt, thumbnail } = post;

  const imageUrl = urlFor(thumbnail);

  // TODO:

  // - Loading state until background/image has loaded. No mary (pop ins).
  // - Move styles to module.css

  return (
    <main
      style={{
        position: "relative",
        paddingTop: "3.5rem",
        marginTop: "-3.5rem",
        overflow: "hidden",
      }}
    >
      <Box
        style={{
          position: "absolute",
          top: "-32px",
          left: "-32px",
          right: "-32px",
          bottom: "-32px",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(32px)",
          opacity: 0.3,
          zIndex: -1,
        }}
      />
      <Container size={"3"} px={{ initial: "4", sm: "6", md: "8", lg: "0" }}>
        <Section size={"1"}>
          <Box
            px={{ initial: "4", sm: "6", md: "8" }}
            style={{
              borderRadius: "var(--radius-6)",
              backgroundColor: "var(--color-panel)",
              backdropFilter: "var(--backdrop-filter-panel)",
            }}
          >
            <Section size={"2"}>
              <Flex direction={"column"} gap={"6"}>
                <Flex direction={"column"} gap={"4"}>
                  <Flex direction={"column"} gap={"2"}>
                    <Heading size="5" color="gray" align={"right"}>
                      {formatDate(_createdAt, "full")}
                    </Heading>
                    <Heading size={{ initial: "8", md: "9" }}>{title}</Heading>
                  </Flex>
                  <Box>
                    <Badge size={"3"}>
                      <BiBulb size={14} />
                      React
                    </Badge>
                  </Box>
                </Flex>
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    paddingTop: "56.25%",
                    aspectRatio: "16 / 9",
                    borderRadius: "var(--radius-2)",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={imageUrl}
                    alt={`Thumbnail for ${post.title}`}
                    objectFit="cover"
                    fill
                  />
                </div>
                <Box>
                  <PortableText value={content} />
                </Box>
              </Flex>
            </Section>
          </Box>
        </Section>
      </Container>
    </main>
  );
}
