import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import  Link from "next/link"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>Hello Chachu</h1>
        {children}
        <h2>Footer</h2>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </body>
    </html>
  );
}
// javascript s html m jb hum changes krein usko hum DOM Manipulation 
//google bots ka kaam ha website ko dekhna or unki files ko check kr k unke according ranking krna k konsi top p ae website 
// html browser p ho rahi ha render to wo client side rendering ha 
// html jb server p render hogi to wo server side rendering hai 
// server side rendering m 2 types ha ek static or ek dynamic 
// server p html bn raha ha wo static server side rendering hoti ha 

// tailwind css homework