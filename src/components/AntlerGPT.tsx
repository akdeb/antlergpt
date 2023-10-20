"use client"

import _ from "lodash";
import { Card, Flex, Grid, TextArea, Text, Button } from "@radix-ui/themes";
import { useState, useCallback } from "react";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger,  } from "./Radix";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/index";
import { useCompletion } from "ai/react";
import { Partner, PartnerPrompts } from "@/lib/constants";

const AntlerGPT = () => {
    const [ partner, setPartner ]  = useState<Partner>("Tyler");
      const { complete, completion } = useCompletion({
        api: '/api/completion',
        body: {
            partner,
        }
      });

      const completePartnerThoughts = useCallback(
        async (c: string) => {
          await complete(c);
        },
        [complete],
      );


    const [ question, setQuestion ] = useState<string>("");

    return <Grid columns={{ "sm": "1", "md": "2"}} width="100%">
            <Flex>
                <Image width={300} height={400} src={`/${_.toLower(partner)}.png`} alt={partner} />
            </Flex>
            <Flex direction="column" gap="3" style={{ maxWidth: 300 }}>
            <SelectRoot size="3" defaultValue="Tyler" onValueChange={(value: Partner) => setPartner(value)}>
    <SelectTrigger color="red" />
    <SelectContent color="red">
        {PartnerPrompts.map((partner, index) => <SelectItem key={index} value={partner.name}>{partner.name}</SelectItem>)}
    </SelectContent>
  </SelectRoot>
  <TextArea size="3" color="red" maxLength={500} placeholder="Whats your wedge?" value={question} onChange={(e) => setQuestion(e.currentTarget.value)} rows={4} />
  <Button color="red" disabled={!question} size="3" onClick={() => completePartnerThoughts(question)}>
  <Sparkle size={16} weight="fill" /> Pitch
</Button>
  <Flex p="3" style={{ border: "1px solid #ccc"}}>
    <Text color={completion ? undefined : "gray"}>{completion || "Thinking..."}</Text>
  </Flex>
            </Flex>
        </Grid>  
};

export default AntlerGPT;