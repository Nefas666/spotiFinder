import { Card, Metric, Text, Icon, Flex } from "@tremor/react";

import { MusicalNoteIcon, PlayIcon, TicketIcon } from "@heroicons/react/24/outline";


const categories = [
  {
    title: "Assets",
    metric: "$ 23,456,456",
    icon: MusicalNoteIcon,
  },
  {
    title: "Tax",
    metric: "$ 13,123",
    icon: TicketIcon,
    color: "yellow",
  },
  {
    title: "Employees",
    metric: "456",
    icon: PlayIcon,
    color: "red",
  },
];
function Header() {
  return (
    <>
      {categories.map((item) => (
        <Card key={item.title} decoration="top" className={item.color}>
          <Flex className="justify-start gap-x-4">
            <Icon icon={item.icon} variant="simple" size="sm" color="purple"/>
            {/* <Block truncate={true}> */}
              <Text>{item.title}</Text>
              <Metric>{item.metric}</Metric>
            {/* </Block> */}
          </Flex>
        </Card>
      ))}

    </>
    
  );
}
export default Header;