import { siteConfig } from "@/config/site";
import { Providers } from "./providers";
import { Metadata } from "next";
import "@/styles/globals.css";
import { clsx } from "clsx";
import { fontSans } from "@/config/fonts";


export const metadata: Metadata = {
   title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
   },
   description: siteConfig.description,
   icons: {
      icon: "/favicon.ico",
   },
};
export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html suppressHydrationWarning lang="en">
         <body className={clsx(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
         )} >
            <Providers popup={<></>}>
               {children}
            </Providers>
         </body>
      </html>
   );
}
