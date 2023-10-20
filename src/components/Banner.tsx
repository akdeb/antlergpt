"use client";

import { Button, Flex } from "@radix-ui/themes";
import Image from "next/image";

export const Banner = () => {
    return <div style={{ width: "100%", position: "absolute",top: 0,padding: 10 }}>
        <Flex justify="center">
        <Flex><Button size="4" onClick={() => {alert("Talk to 5000 more customers first")}}>
        Click for $250,000 in funding <span style={{ fontSize: 30 }}>🤑</span>
      </Button>
            </Flex>
        </Flex>
        
    </div>
};

export default Banner;