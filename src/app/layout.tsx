import { PropsWithChildren } from "react";
import React from 'react';
import "./globals.css";
import Pattern from "./components/Pattern";


export const metadata = {
    title: "SpotyFinder",
    description: "Scaffolding Next JS with Tailwind CSS and Tremor.",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className="bg-transparent-900 w-screen h-sceen absolute t-0 l-0">
                <Pattern/>
                {children}
            </body>
        </html>
    );
};