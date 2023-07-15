'use client'
import React from "react";
import { useState } from "react";
import {
    AreaChart,
    Card,
    Flex,
    Icon,
    Text,
    Title,
    Toggle,
    ToggleItem,
} from "@tremor/react";
import {InformationCircleIcon} from "@heroicons/react/20/solid";

export const performance = [
    {
        date: "2023-01-01",
        Tracks: 900.73,
        Shows: 3,
        Plays: 173,
    },
    {
        date: "2023-01-02",
        Tracks: 1000.74,
        Shows: 7,
        Plays: 124,
    },
    // ...
    {
        date: "2023-03-13",
        Tracks: 882,
        Shows: 3,
        Plays: 159,
    },
];

// Basic formatters for the chart values

const numberFormatter = (value: number) =>
    `${Intl.NumberFormat("us").format(value).toString()}`;

export default function ChartView() {
    const [selectedKpi, setSelectedKpi] = useState("Sales");

    // map formatters by selectedKpi
    const formatters: { [key: string]: any } = {
        Tracks: numberFormatter,
        Shows: numberFormatter,
        Plays: numberFormatter,
    };

    return (
        <Card className="bg-slate-900">
            <div className="md:flex justify-between bg-slate-800">
                <div>
                    <Flex
                        justifyContent="start"
                        className="space-x-0.5"
                        alignItems="center"
                    >
                        <Title> Your Stats </Title>
                        <Icon
                            icon={InformationCircleIcon}
                            variant="simple"
                            tooltip="Shows day-over-day (%) changes of past performance"
                            color="emerald"
                        />
                    </Flex>
                </div>
                <div className="mt-6 md:mt-0">
                    <Toggle
                        color="zinc"
                        defaultValue={selectedKpi}
                        onValueChange={(value) => setSelectedKpi(value)}
                    >
                        <ToggleItem value="Tracks" text="Tacks" />
                        <ToggleItem value="Shows" text="Shows" />
                        <ToggleItem value="Plays" text="Plays" />
                    </Toggle>
                </div>
            </div>
            <AreaChart
                data={performance}
                index="date"
                categories={[selectedKpi]}
                colors={["emerald"]}
                showLegend={false}
                valueFormatter={formatters[selectedKpi]}
                yAxisWidth={56}
                className="h-96 mt-8"
            />
        </Card>
    );
}