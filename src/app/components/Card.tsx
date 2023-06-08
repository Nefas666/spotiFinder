import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";


function App() {
  return (
    <Card className="max-w-sm">
      <Text></Text>
      <Metric></Metric>
      <Flex className="mt-4">
        <Text></Text>
        <Text></Text>
      </Flex>
      <ProgressBar percentageValue={42} className="mt-2" />
    </Card>
  );
}
export default App;