
import { Inter } from 'next/font/google'
import './globals.css'
import GoHomeButton from './components/GoHomeButton'
import GoBackButton from './components/GoBackButton'
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Online Calculator ',
  description: 'Online Tool Performing Different Types of Calculations',
}

export default function RootLayout({ children }) {
  const navigateBack = () => {
    window.history.back();
  };
  const isHomePage = typeof window !== 'undefined' 
  && window.location.pathname === '/';
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <nav className='nav-bar'>
          <GoHomeButton/>
          
          <GoBackButton className={''}/>
        </nav>
        <div className='main'>
        {children}
        </div>
       </body>
      
    </html>
  )
}
