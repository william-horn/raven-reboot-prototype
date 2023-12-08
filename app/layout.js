import { Inter } from 'next/font/google'
import './globals.css'
import Text from '@/components/Typography/Text'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Raven',
  description: 'Coming soon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      className={inter.className + " theme-dark bg-page"}>
        <header>
          <h1 
          className="text-primary pt-6 py-6 text-center text-2xl font-bold">
            Welcome to&nbsp;
            <span className="text-logo">Raven</span>
          </h1>
        </header>
        <nav>
          <ul className="flex gap-3 justify-center nav mb-5 p-3">
            <li><a href="/">Home</a></li>&bull;
            <li><a href="/about">About</a></li>&bull;
            <li><a href="/gallary">Gallary</a></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
