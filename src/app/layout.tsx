import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Cocktails',
    description: 'Cocktails des soirées de Gaby',
    openGraph: {
        title: 'Cocktails',
        description: 'Cocktails des soirées de Gaby',
        images: [
            {
                url: 'https://cocktails.ganarok.com/cocktails/white-russian.jpg',
                width: 1080,
                height: 1440,
                alt: 'Cocktail'
            }
        ]
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    disableTransitionOnChange
                    enableSystem
                >
                    {children}
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}
