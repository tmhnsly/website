import { Container, Heading, Text, Section } from "@radix-ui/themes";

export default async function ContactPage() {
  return (
    <main>
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
          <Heading size="9">Contact</Heading>
        </Section>
      </Container>
    </main>
  );
}
