import "./globals.css";
import Header from "@/components/Header";

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
      </body>
    </html>
  );
}
