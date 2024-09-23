import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/system";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="light text-foreground bg-background p-4">
        <NextUIProvider>
          <Header />
          {children}
          <ToastContainer />
        </NextUIProvider>
      </body>
    </html>
  );
}
