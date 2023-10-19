import AntlerGPT from "@/components/AntlerGPT"
import { Container, Heading, Flex, Section } from "@radix-ui/themes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Container size="4" mt="9">
        <Flex direction={"column"} gap="8" align={"center"}>
        <Heading size="8">AntlerGPT</Heading>
        <AntlerGPT />
        </Flex>
       
      </Container>
    </main>
  )
}
