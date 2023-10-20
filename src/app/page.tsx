import AntlerGPT from "@/components/AntlerGPT"
import Banner from "@/components/Banner"
import { GithubLogo } from "@phosphor-icons/react/dist/ssr/index"
import { Container, Heading, Flex, Section, Text, Button, IconButton } from "@radix-ui/themes"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24">
      <Banner />
      <Container size="4">
        <Flex direction={"column"} gap="8" align={"center"}>
        <Flex direction="row" gap="2">
            <Image height={50} width={50} alt="Antler logo" src="/antlerlogo.png" />
            <Heading size="8">AntlerGPT</Heading>
        </Flex>
       
        <AntlerGPT />
        </Flex>
        
             </Container>
             <footer>
        <Text style={{ paddingBottom: 10 }} align={"center"} color="gray" size={"2"} >Made with love by Akashdeep from Antler ATX5 <a href="https://github.com/akdeb/antlergpt">
        <IconButton radius="full" variant="soft" size="1">
        <GithubLogo size={16} weight="fill" />  </IconButton>
          </a> </Text>
        </footer>
    </main>
  )
}
