import axios from "axios";
import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalState } from "./context/GlobalState";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UniBarter",
  description: "Buy,Sell and Rent items. Search for items assisted by chatGPT",
};

export default function RootLayout({ children }) {
  axios.defaults.withCredentials = true;

  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalState>{children}</GlobalState>
      </body>
    </html>
  );
}
