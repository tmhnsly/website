import HeroCtaSection from "@/sections/HeroCtaSection/HeroCtaSection";
import { Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <main>
      <Container
        px={{ initial: "4", sm: "6", md: "8", lg: "0" }}
        size={"4"}
        style={{
          paddingTop: "3.5rem",
          marginTop: "-3.5rem",
          background:
            "linear-gradient(180deg, var(--accent-2) 0%, var(--accent-5) 100%",
        }}
      >
        <HeroCtaSection
          heading={"Hi, I'm Tom 👋"}
          subheading={
            "This site is a work in progress! It's mostly here to chip away at on the side."
          }
          ctaText={"This button doesn't do anything"}
        />
      </Container>
    </main>
  );
}
