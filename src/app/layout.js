import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Khemvi Creative - Greensboro, NC Web Design",
  description: "Elevate your Greensboro business with Khemvi Creative's bespoke web design services. We craft visually stunning, user-friendly websites tailored to your brand's unique identity, ensuring a strong online presence that captivates and converts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <nav><Navbar /></nav>
        {children}
      <footer><Footer /></footer>
      </body>
    </html>
  );
}
