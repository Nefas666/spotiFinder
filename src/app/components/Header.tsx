import React from "react";
import { Card, Metric, Text, Icon, Flex } from "@tremor/react";
import { MusicalNoteIcon, PlayIcon, TicketIcon, UserCircleIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import categoryData from "../data/categoryData.json"

const jsonData = categoryData;

const convertedData = jsonData.map(item => {
  // Convert the 'metric' property to a number
  const metric = parseFloat(item.metric);

  // Map the icon name to the corresponding React JSX element constructor
  let icon: React.JSXElementConstructor<any> | undefined;
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
      return null;
  }

  // Return the converted object and filter null values
  return {
    title: item.title,
    metric,
    icon,
    color: item.color
  };
}).filter(item => item !== null);

interface Categories  {
    title: string;
    metric: number;
    icon: React.JSXElementConstructor<any> | undefined;
    color: string;
}
const categories: Categories[] = convertedData as Categories[];
function Header() {
  return (
    <div className="flex flex-col justify-between items-start gap-4 mt-8">
      {categories.map((item) => (
        <Card className="bg-slate-800" key={item.title} decoration="top">
          <Flex className="justify-start gap-x-8">
          {item.icon ? (
              <Icon icon={item.icon} variant="simple" size="sm" />
            ) : (
              <></>
            )}
              <Text className="text-emerald-500">{item.title}</Text>
              <Metric className="text-white">{item.metric}</Metric>
          </Flex>
        </Card>
      ))}

    </div>
    
  );
}
export default Header;