import type { Metadata } from "next";
import "./globals.css";
import { UIProvider, ColorModeScript } from "@yamada-ui/react";


export const metadata: Metadata = {
    title: "MHJoinUp",
    description: "モンスターハンター参加型配信用、参加希望者管理アプリ",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <main>
                    <ColorModeScript />
                    <UIProvider>
                        {children}
                    </UIProvider>
                </main>
            </body>
        </html>
    );
}
