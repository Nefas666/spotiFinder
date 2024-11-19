import { PropsWithChildren } from "react";
import React from 'react';
import "./globals.css";


export const metadata = {
    title: "SpotyFinder",
    description: "Scaffolding Next JS with styled-components",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className="w-100 h-100 relative z-0">
                {children}
            </body>
        </html>
    );
};