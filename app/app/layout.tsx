import "@/styles/globals.css";
import { Viewport } from "next";
import { History, Home, LogOut, Scan, User, Wallet } from "lucide-react";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  popup,
}: {
  children: React.ReactNode;
  popup: React.ReactNode;
} & any) {
  return (

    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full gap-4 shadow-lg border-t-1 flex items-center justify-center py-3 px-4">
        <Link href={"/app"}>
          <Button isIconOnly radius="full" size="md">
            <Home />
          </Button>
        </Link>
        <Link href={"/app/wallet"}>
          <Button isIconOnly radius="full" size="md">
            <Wallet />
          </Button>
        </Link>

        <Link href={"/app/scan"}>
          <Button isIconOnly radius="full" size="md">
            <Scan />
          </Button>
        </Link>

        <Link href="/app/history">
          <Button isIconOnly radius="full" size="md">
            <History />
          </Button>
        </Link>

        <Link href="/app/user-details">
          <Button isIconOnly radius="full" size="md">
            <User />
          </Button>
        </Link>

        <Link href="/auth/login" >
          <Button isIconOnly radius="full" size="md">
            <LogOut />
          </Button>
        </Link>
      </footer>
    </div>
  );
}
