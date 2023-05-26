import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ATO Webpanel | Scale your talent to the next level",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="flex flex-col items-center justify-start scroll-smooth bg-white">
                    {children}
                </div>
            </body>
        </html>
    );
}
