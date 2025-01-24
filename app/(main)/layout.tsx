import type { Metadata } from 'next';
import { poppins } from '@/app/ui/fonts';
import '../globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '@/app/ui/navbar';

export const metadata: Metadata = {
  title: {
    template: '%s | Cocobase',
    default: 'Cocobase',
  },
  description: 'Cocobase',
  metadataBase: new URL('https://cocobase-beta.vercel.app/'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-white text-[#202224] scroll-smooth`}>
        <Navbar />
        <div className="relative md:top-[48px] bottom-[48px] md:bottom-0">
          {children}
        </div>
      </body>
    </html>
  )
}
