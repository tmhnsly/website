import { Heading, Grid, Container, Section } from "@radix-ui/themes";
import { sanityFetch } from "../../../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { BlogPost } from "../studio/sanity.types";
import CardLink from "../../components/CardLink/CardLink";
import { formatDate } from "@/utils/dateUtils";
import { urlFor } from "@/utils/sanityImageUtils";

import styles from "./BlogPage.module.css";

const BLOG_POSTS_QUERY = `*[_type == 'blogPost']{
  _createdAt,
  title,
  slug,
  thumbnail
}|order(_createdAt desc)`;

const posts = await sanityFetch<SanityDocument>({
  query: BLOG_POSTS_QUERY,
});

// TODO:
// - Loading state for posts
// - Post responsive design

export default async function BlogPage() {
  return (
    <main className={styles.main}>
      <Container
        size={"4"}
        px={{ initial: "4", sm: "6", md: "8", lg: "0" }}
        style={{
          paddingTop: "3.5rem",
          marginTop: "-3.5rem",
          background:
            "linear-gradient(180deg, var(--accent-2) 0%, var(--accent-5) 100%",
        }}
      >
        <Section size={"2"}>
          <Heading size="9">Blog</Heading>
        </Section>
      </Container>
      <Section size={"1"} className={styles.sectionBackground}>
        <Container size={"4"} px={{ initial: "4", sm: "6", md: "8", lg: "0" }}>
          <Grid columns={{ initial: "1", sm: "2", md: "3" }} gap={"4"}>
            {posts.map(
              (post: BlogPost) =>
                post.title &&
                post.slug && (
                  <CardLink
                    href={`/blog/${post.slug.current}`}
                    key={post._id}
                    eyebrow={formatDate(post._createdAt)}
                    heading={post?.title}
                    imageUrl={urlFor(post.thumbnail ?? null)}
                  />
                )
            )}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}
