import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Alert from "./components/alert";
const inter = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "CP-AR",
    description: "An app to learn about CPR.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html data-theme="mytheme" lang="en">
            <body className={`${inter.className} flex flex-col min-h-screen`}>
                <div className="flex-1 mb-8"> {/* Add padding at the bottom */}
                    <Alert />
                    {children} {/* Main content */}
                </div>
            </body>
        </html>
    );
}
