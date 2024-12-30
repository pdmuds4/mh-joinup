"use client";

import { useState } from "react";
import { SimpleGrid, GridItem, Heading, Input, Button } from "@yamada-ui/react";

type Props = {
    defaultValue: string;
}

export default function KeywordEditor(props: Props) {
    const [isEdit, setIsEdit] = useState(!Boolean(props.defaultValue));
    const [value, setValue] = useState(props.defaultValue);

    return (
        <SimpleGrid columns={5} gap={2}>
            <GridItem colSpan={3} justifyContent={"center"} alignItems={"center"} display={"flex"}>
                { isEdit ?
                    (
                        <Input 
                            focusBorderColor="amber.500" placeholder="合言葉を設定" size="sm" 
                            defaultValue={value} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setValue(e.target.value)}
                        />
                    ) : (
                        <Heading as="h3" size="sm" isTruncated>{value}</Heading>
                    ) 
                }
            </GridItem>
            { isEdit ?
                (
                    <GridItem colSpan={2}>
                        <Button colorScheme="success" size="sm" w="100%" onClick={()=>setIsEdit(!isEdit)}>保存</Button>
                    </GridItem>
                ) : (
                    <>
                        <GridItem colSpan={1}>
                            <Button colorScheme="primary" size="sm" w="100%" onClick={()=>setIsEdit(!isEdit)}>編集</Button>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <Button colorScheme="danger" size="sm" w="100%">削除</Button>
                        </GridItem>
                    </>
                )
            }
        </SimpleGrid>
    );
}