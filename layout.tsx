import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
const inter=Inter({subsets:['latin'],variable:'--font-inter'}); const space=Space_Grotesk({subsets:['latin'],variable:'--font-space'});
export const metadata:Metadata={title:'Velora Motors — Drive the Future',description:'Buy, sell, fix and detail vehicles through one premium mobility network.',metadataBase:new URL('https://example.com')};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={`${inter.variable} ${space.variable}`}>{children}</body></html>}
