import Head from "next/head";
import "./globals.css";



export const metadata = {
  title: "Xora",
  description: "The coolest landing page you came across. Buy amazing landing pages for your Saas project",
  icons : {
    icon : "/favicon.ico"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
