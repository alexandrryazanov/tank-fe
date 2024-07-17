import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"p-4 flex flex-col gap-4"}>
        <Header />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
