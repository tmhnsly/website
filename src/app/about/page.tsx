import { Container, Heading, Section } from "@radix-ui/themes";
export default async function AboutPage() {
  return (
    <main>
      <Container
        size={"4"}
        px={"4"}
        style={{
          paddingTop: "3.5rem",
          marginTop: "-3.5rem",
          background:
            "linear-gradient(180deg, var(--accent-2) 0%, var(--accent-5) 100%",
        }}
      >
        <Section size={"2"}>
          <Heading size="9">About</Heading>
        </Section>
      </Container>
    </main>
  );
}
