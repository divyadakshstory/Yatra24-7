export const metadata = {
  title: "Yatra24-7",
  description: "Premium Cab Booking Platform",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
