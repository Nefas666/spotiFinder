import React from "react";
import { Card, Metric, Text, Icon, Flex } from "@tremor/react";
import { MusicalNoteIcon, PlayIcon, TicketIcon, UserCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import categoryData from "../data/categoryData.json"

const jsonData = categoryData;

const convertedData = jsonData.map(item => {
  // Convert the 'metric' property to a number
  const metric = parseFloat(item.metric);

  // Map the icon name to the corresponding React JSX element constructor
  let icon;
  switch (item.icon) {
    case 'MusicalNoteIcon':
      icon = MusicalNoteIcon;
      break;
    case 'TicketIcon':
      icon = TicketIcon;
      break;
    case 'PlayIcon':
      icon = PlayIcon;
      break;
    case 'UserCircleIcon':
      icon = UserCircleIcon;
      break;
    case 'ListBulletIcon':
      icon = ListBulletIcon;
      break;
    default:
      // Handle the case when the icon name is not recognized
      // You can assign a default icon or display an error message
      break;
  }

  // Return the converted object
  return {
    title: item.title,
    metric,
    icon,
    color: item.color
  };
});

interface Categories  {
    title: string;
    metric: number;
    icon: React.JSXElementConstructor<any>;
    color: string;
}
const categories: Categories[] = convertedData;
//   {
//     title: "Tracks",
//     metric: 23.456,
//     icon: MusicalNoteIcon,
//     color: "purple",
//   },
//   {
//     title: "Shows",
//     metric: 13,
//     icon: TicketIcon,
//     color: "yellow",
//   },
//   {
//     title: "Plays",
//     metric: 456,
//     icon: PlayIcon,
//     color: "red",
//   },
//   {
//     title: "Artists",
//     metric: 120,
//     icon: UserCircleIcon,
//     color: "purple",
//   },
//   {
//     title: "Playlist",
//     metric: 20,
//     icon: ListBulletIcon,
//     color: "yellow",
//   },
  
// ];
function Header() {
  return (
    <div className="flex flex-col justify-between items-start gap-4 mt-8">
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