import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "react-week4",
  description: "react 2 week 4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}