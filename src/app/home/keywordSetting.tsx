"use client";

import { Flex, Heading, Tag, Tooltip, Accordion, AccordionItem, AccordionPanel, Button } from "@yamada-ui/react";
import { FaQuestion, FaPlus } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";

import KeywordEditor from "./keywordEditor";
import type { SettingsPayload } from "@/models/application/payload";

type Props = {
    settings: SettingsPayload.GETResponseType;
    addKeywordAction: () => void;
    removeKeywordAction: (index: number) => void;
    updateKeywordAction: (index: number, value: string) => void;
}

export default function KeyWordSetting(props: Props) {
    return (
        <>
            <Heading as="h2" size="sm">
                参加希望の合言葉
                <Tooltip label="配信時に、チャットコメントに含まれると『参加希望』とみなされる合言葉を設定できます" placement="top">
                    <Tag size="sm" rounded="full" colorScheme="blackAlpha" border="white" bgColor="whiteAlpha.600" ml={2}>
                        <FaQuestion/>
                    </Tag>
                </Tooltip>
            </Heading>
            <Accordion icon={<MdOutlineChat/>} toggle>
                <AccordionItem label="合言葉一覧">
                    <AccordionPanel p={2}>
                        <Flex direction="column" gap={2}>
                            <Button size="sm" colorScheme="whiteAlpha" startIcon={<FaPlus/>} onClick={props.addKeywordAction}>合言葉を追加する</Button>
                            { 
                                props.settings.keywords.map(
                                    (keyword, index) => (
                                        <KeywordEditor 
                                            key={index}
                                            index={index}
                                            setting_keywords={props.settings.keywords}
                                            defaultValue={keyword}
                                            removeAction={props.removeKeywordAction}
                                            updateAction={props.updateKeywordAction}
                                        />
                                    )
                                )
                            }
                        </Flex>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </>
    )
}