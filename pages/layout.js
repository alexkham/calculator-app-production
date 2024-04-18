
import { Inter } from 'next/font/google'
import './pages.css'
// import GoHomeButton from './components/GoHomeButton'
// import GoBackButton from './components/GoBackButton'
// import Link from 'next/link';
import MyNavbar from '@/app/components/my-navbar/MyNavbar';
import ScrollUpButton from '@/app/components/scroll-up-button/ScrollUpButton';
import Footer from '@/app/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Online Calculator ',
//   description: 'Online Tool Performing Different Types of Calculations',
// }

export default function PagesLayout({ children }) {
  const navigateBack = () => {
    window.history.back();
  };
  const isHomePage = typeof window !== 'undefined' 
  && window.location.pathname === '/';
  return (
    
      <div className={inter.className}>
        
      {/* <nav className='nav-bar'>
          <GoHomeButton className={'fixed-button'}/>
          
          <GoBackButton className={'fixed-button'}/>
        </nav> */}
        <div className='main'>
        <MyNavbar></MyNavbar>
        {children}
        </div>
        <ScrollUpButton className={'scroll-button'}></ScrollUpButton>
        <Footer></Footer>
       
       </div>
      
      
    
  )
}
