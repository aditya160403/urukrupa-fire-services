import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gurukrupa Fire Services | Your Trusted Fire Safety Partner",
  description:
    "Gurukrupa Fire Services is your dedicated partner in fire safety and protection. With over two decades of committed service, we safeguard lives and property. Contact us for expert fire extinguisher supply, installation, AMC, certificates, and municipal corporation compliance in Aurangabad.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
