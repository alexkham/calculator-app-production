
import { Inter } from 'next/font/google'
import './globals.css'
import GoHomeButton from './components/GoHomeButton'
import GoBackButton from './components/GoBackButton'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Calculator ',
  description: 'Online Tool Performing Different Types of Calculations',
}

export default function RootLayout({ children }) {
  const isHomePage = typeof window !== 'undefined' 
  && window.location.pathname === '/';
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <div className='button-container'>
      {!isHomePage&&<GoHomeButton className={'fixed-button'}></GoHomeButton>}
      
      <GoBackButton className={'fixed-button'}></GoBackButton>
      </div>
        </body>
      
    </html>
  )
}
