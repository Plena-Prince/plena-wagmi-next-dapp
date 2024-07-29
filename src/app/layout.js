"use client";

import "./globals.css";
import dynamic from "next/dynamic";

// Dynamic import for PlenaWagmiProvider
const PlenaWagmiProvider = dynamic(() => import('./providers/plenaWagmiProvider').then((mod) => mod.PlenaWagmiProvider), { ssr: false });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PlenaWagmiProvider>
          {children}
        </PlenaWagmiProvider>
      </body>
    </html>
  );
}
