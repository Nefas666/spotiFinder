import { Card, Metric, Text, Icon, Flex } from "@tremor/react";
import React from "react";
import { MusicalNoteIcon, PlayIcon, TicketIcon, UserCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline";
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
    metric: "23.456",
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
  {
    title: "Artists",
    metric: "120",
    icon: UserCircleIcon,
    color: "purple",
  },
  {
    title: "Playlist",
    metric: "20",
    icon: ListBulletIcon,
    color: "yellow",
  },
  
];
function Header() {
  return (
    <div className="flex flex-col justify-between items-start gap-y-4 gap-x-4 mt-8">
      {categories.map((item) => (
        <Card className="bg-slate-800" key={item.title} decoration="top">
          <Flex className="justify-start gap-x-8">
            <Icon icon={item.icon} variant="simple" size="sm"/>
              <Text className="text-emerald-500">{item.title}</Text>
              <Metric className="text-white">{item.metric}</Metric>
          </Flex>
        </Card>
      ))}

    </div>
    
  );
}
export default Header;