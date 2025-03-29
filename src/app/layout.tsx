import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "smartLET",
  description: "Your smart property listing platform",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
