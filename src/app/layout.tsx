import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedCursor from "react-animated-cursor";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shubhangam Saxena",
  description: "Shubhangam Saxena's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} style={{ margin: "20px" }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <AnimatedCursor
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
              backgroundColor: "var(--cursor-color)",
            }}
            outerStyle={{
              border: "3px solid var(--cursor-color)",
            }}
          /> */}
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
