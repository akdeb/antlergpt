"use client"

import _ from "lodash";
import { Flex, Grid, TextArea, Text, Button } from "@radix-ui/themes";
import { useState, useCallback } from "react";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger,  } from "./Radix";
import Image from "next/image";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/index";
import { useCompletion } from "ai/react";
import styles from './AntlerGPT.module.css';
import { Partner, PartnerPrompts } from "@/lib/constants";

const AntlerGPT = () => {
    const [ partner, setPartner ]  = useState<Partner>("Tyler");
      const { complete, completion, isLoading } = useCompletion({
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

    return <Grid columns={{ "sm": "1", "md": "2"}} gap={"3"} mb={"5"} width="100%">
            <Flex className={styles['image-container']} style={{ maxHeight: 300 }}>
                <Image width={300}         className={`${styles['oscillating-image']} ${!isLoading ? styles['oscillate'] : ''}`}
 height={400} src={`/${_.toLower(partner)}.png`} alt={partner} />
            </Flex>
            <Flex direction="column" gap="3" style={{ maxWidth: 300 }}>
            <SelectRoot size="3" defaultValue="Tyler" onValueChange={(value: Partner) => setPartner(value)}>
    <SelectTrigger color="red" />
    <SelectContent color="red">
        {Object.keys(PartnerPrompts).map((partner: string, index: number) => <SelectItem key={index} value={partner}>{partner}</SelectItem>)}
    </SelectContent>
  </SelectRoot>
  <TextArea size="3" color="red" maxLength={500} placeholder="Whats your idea?" value={question} onChange={(e) => setQuestion(e.currentTarget.value)} rows={4} />
  <Button color="red" disabled={!question} size="3" onClick={() => completePartnerThoughts(question)}>
  <Sparkle size={16} weight="fill" /> Pitch
</Button>
  <Flex p="3" style={{ borderRadius: 4, border: "1px solid #ccc"}}>
    <Text color={completion ? undefined : "gray"}>{completion || "Thinking..."}</Text>
  </Flex>
            </Flex>
        </Grid>  
};

export default AntlerGPT;