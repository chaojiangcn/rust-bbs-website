import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";

const ReduxProvider = dynamic(() => import("@/store/redux-provider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "欢迎来到 Rust BBS 社区，项目旨在帮助大家快速了解&入门 rust Web 开发",
  description: "RustBBS项目旨在帮助大家快速了解&入门 rust Web 开发",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="bg-white dark:bg-black text-slate-900 dark:text-white">
            {children}
          </div>
        </ReduxProvider>
        <Toaster />
        <ToastContainer stacked />
      </body>
    </html>
  );
}
