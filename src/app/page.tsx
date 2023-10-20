import AntlerGPT from "@/components/AntlerGPT"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/index"
import { Container, Heading, Flex, Section, Text, Button, IconButton } from "@radix-ui/themes"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Button size="4" style={{ position: "absolute", top: 10, right: 10 }}>
        Click for $250,000 in funding <span style={{ fontSize: 30 }}>🤑</span>
      </Button>
      <Container size="4">
        <Flex direction={"column"} gap="8" align={"center"}>
        <Heading size="8">AntlerGPT</Heading>
        <AntlerGPT />
        </Flex>
        <Flex gap="2" align="center" style={{ position: "absolute", bottom: 10, left: 10 }}>
        <Text color="gray" size={"2"} >Made with love by Akashdeep from Antler ATX </Text>
        {/* (repo: <a href="https://github.com/akdeb/antlergpt">https://github.com/akdeb/antlergpt</a>) */}

        <a href="https://github.com/akdeb/antlergpt">
        <IconButton radius="full" variant="soft" size="1">
        <GithubLogo size={16} weight="fill" />  </IconButton>
          </a>      </Flex>
      </Container>
      
    </main>
  )
}
