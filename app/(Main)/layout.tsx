import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl">
    <Navbar />
         <main >{children}</main>
         <Footer />
    </div>
  )
}
