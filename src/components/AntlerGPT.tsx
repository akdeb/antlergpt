"use client"

import _ from "lodash";
import { Card, Flex, Grid, TextArea, Text, Button } from "@radix-ui/themes";
import { useState } from "react";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger,  } from "./Radix";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/index";

export type Partner = "Tyler" | "Prerna" | "Sam";
export const PartnerPrompts: {name: Partner, prompt: string}[] = [
    {name: "Tyler", prompt: ""},
    {name: "Prerna", prompt: ""},
    {name: "Sam", prompt: ""},
];

const AntlerGPT = () => {
    const [ partner, setPartner ]  = useState<Partner>("Tyler");
    const [ question, setQuestion ] = useState<string>("");
    const [ answer, setAnswer ] = useState<string>("");

    return <Grid columns={{ "sm": "1", "md": "2"}} gap="8" width="100%">
            <Flex>
                <Image width={300} height={400} src={`/${_.toLower(partner)}.png`} alt={partner} />
            </Flex>
            <Flex direction="column" gap="3">
            <SelectRoot size="3" defaultValue="Tyler" onValueChange={(value: Partner) => setPartner(value)}>
    <SelectTrigger color="red" />
    <SelectContent color="red">
        {PartnerPrompts.map((partner, index) => <SelectItem key={index} value={partner.name}>{partner.name}</SelectItem>)}
    </SelectContent>
  </SelectRoot>
  <TextArea size="3" color="red" maxLength={500} placeholder="Whats your wedge?" value={question} onChange={(value) => setQuestion(value.currentTarget.value)} rows={4} />
  <Button color="red" disabled={!question} size="3" onClick={() => alert(question)}>
  <Sparkle size={16} weight="fill" /> Pitch
</Button>
  <Flex p="3" style={{ border: "1px solid #ccc"}}>
    <Text>{answer || "Thinking..."}</Text>
  </Flex>
            </Flex>
        </Grid>  
};

export default AntlerGPT;