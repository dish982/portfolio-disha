import { useState } from 'react'
import './App.css'
// import Navbar from './components/Navbar.jsx'
// import profileImg from './assets/disha_img.png'
import LandingPage from './LandingPage'
import MainPortfolio from './MainPortfolio'


function App() {
  const [view, setView] = useState('landing');

  return (
      <main className='min-h-screen w-full transition-all duration-700 relative z-10 pointer-events-auto'>
        {view === 'landing' ? (
          <LandingPage onEnter={() => setView('portfolio')} />
        ) : (
          <MainPortfolio />
          
        )
      }

      </main>
  );
}

export default App
