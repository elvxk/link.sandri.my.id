import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { inter, ceraRoundPro } from "@/utils/fonts";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "Linknya Sandri",
  description: "Link listnya Sandri",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} ${ceraRoundPro}`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
