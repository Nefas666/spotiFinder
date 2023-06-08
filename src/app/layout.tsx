import { PropsWithChildren } from "react";
import "./globals.css";

export const metadata = {
    title: "SpotyFinder",
    description: "Scaffolding Next JS with Tailwind CSS and Tremor.",
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className="bg-slate-900">{children}</body>
        </html>
    );
};