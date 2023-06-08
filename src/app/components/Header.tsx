import { Card, Metric, Text, Icon, Flex } from "@tremor/react";

import { MusicalNoteIcon, PlayIcon, TicketIcon } from "@heroicons/react/24/outline";
import { JsxElement } from "typescript";

interface Categories  {
    title: string;
    metric: number;
    icon: JsxElement;
    color: string;
}
const categories = [
  {
    title: "Tracks",
    metric: "23,456,456",
    icon: MusicalNoteIcon,
    color: "purple",
  },
  {
    title: "Shows",
    metric: "13",
    icon: TicketIcon,
    color: "yellow",
  },
  {
    title: "Plays",
    metric: "456",
    icon: PlayIcon,
    color: "red",
  },
];
function Header() {
  return (
    <>
      {categories.map((item) => (
        <Card key={item.title} decoration="top">
          <Flex className="justify-start gap-x-8">
            <Icon icon={item.icon} variant="simple" size="sm"/>
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
          </Flex>
        </Card>
      ))}

    </>
    
  );
}
export default Header;