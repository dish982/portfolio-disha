import { Home, User, FileText, Code, Sparkles, Mail, Sun, Moon, Menu, X} from 'lucide-react'
import { useState, useEffect } from 'react'
import BubbleMenu from './BubbleMenu'
import FloatingLines from './FloatingLines';

function Navbar() {

    const [dark, setDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

      const currentGradient = dark 
        ? ['#4a1525', '#801b36', '#e945f5'] 
        : ['#9c4a5c', '#c26d7e', '#501220'];

        
  const menuItems = [
    {
      label: 'about',
      href: '#about',
      ariaLabel: 'About Me',
      rotation: -8,
      hoverStyles: { bgColor: 'var(--color-red-wine)', textColor: 'var(--color-oat-milk)' }
    },
    {
      label: 'skills',
      href: '#skills',
      ariaLabel: 'My Skills',
      rotation: 8,
      hoverStyles: { bgColor: 'var(--color-red-wine)', textColor: 'var(--color-oat-milk)' }
    },
    {
      label: 'projects',
      href: '#projects',
      ariaLabel: 'Projects Portfolio',
      rotation: -6,
      hoverStyles: { bgColor: 'var(--color-red-wine)', textColor: 'var(--color-oat-milk)' }
    },
    {
      label: 'contact',
      href: '#contact',
      ariaLabel: 'Contact Info',
      rotation: 8,
      hoverStyles: { bgColor: 'var(--color-red-wine)', textColor: 'var(--color-oat-milk)' }
    }
  ];


    const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'light' : 'dark');
    };

    const navLinkStyles = 'flex items-center gap-2 text-red-wine px-4 py-2 hover:bg-red-wine hover:text-oat-milk hover:rounded-full hover:border';

    return(
        <>

        <div className='fixed inset-0 -z-10 pointer-events-none w-full h-screen overflow-hidden'>
            <FloatingLines 
            enabledWaves={["top","middle","bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={8}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={8}
            bendRadius={8}
            bendStrength={-2}
            interactive
            parallax={true}
            animationSpeed={1}
            // gradientStart="#e945f5"
            // gradientMid="#6f6f6f"
            // gradientEnd="#6a6a6a"
            linesGradient={currentGradient}
            mixBlendMode={dark ? 'screen' : 'multiply'}
            />
        </div>

        {/* <div>
            
        </div> */}
        <BubbleMenu
                logo={
                        <button onClick={toggleDarkMode} 
                        className=" w-full h-full p-2 rounded-full hover:bg-red-wine hover:text-rose-quartz transition-colors text-red-wine flex items-center justify-center">
                            {dark ? <Sun size= {20}/> : <Moon size={20}/>}
                        </button>            
                        
                }
            items={menuItems}
            menuAriaLabel="Toggle Navigation Menu"
            
            /* 🌟 The Theme Mapping Engine */
            menuBg="var(--color-white)"          /* Matches your current light card/dark surface */
            menuContentColor="var(--color-red-wine)" /* Matches your text updates dynamically */
            
            useFixedPosition={true}              /* Keeps it anchored on screen while scrolling */
            animationEase="back.out(1.2)"
            animationDuration={0.4}
            staggerDelay={0.1}
        />

    

        
    

        </>
    )
}

export default Navbar



{/* 
        <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
            
            
            <div id="navbar-content" className='flex items-center gap-4 bg-white/70 backdrop-blur-md px-6 py-2 rounded-full border border-red-wine/30 '>
                
                <button
                    className='md:hidden p-2 text-red-wine '
                    onClick={() => setIsOpen(!isOpen)}
                
                >
                    {isOpen ? <X size = {24}/> : <Menu size = {24} />}
                </button>

                <div className='hidden md:flex items-center gap-2'>
                    <NavLinks styles={navLinkStyles}/>
                </div>

                
                <button onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-red-wine hover:text-rose-quartz transition-colors text-red-wine">
                    {dark ? <Sun size= {20}/> : <Moon size={20}/>}
                </button>

            </div>

            mobile menu overlay

            {isOpen && (
                <div className='absolute bg-white/95 border border-red-wine/20 p-2 flex flex-col gap-2 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300'>
                    <NavLinks styles={navLinkStyles} closeMenu = {() => setIsOpen(false)}/>
                </div>
            )}
            
        </nav> */}

        //   const NavLinks = ({ styles, closeMenu }) => (
//             <>
//                 {/* navbar all sections */}
//                 <a href="#about" onClick={closeMenu} className={styles} title="About">
//                     <User size = {20}></User>About
//                 </a>
//                 <a href="#skills"onClick={closeMenu} className={styles} title="Skills">
//                     <FileText size = {20}></FileText>Skills
//                 </a>
//                 <a href="#projects"onClick={closeMenu} className={styles} title="Projects">
//                     <Code size = {20}></Code>Projects
//                 </a>
//                 {/* <a href="#extra"onClick={closeMenu} className={styles} title="Hobbies">
//                     <Sparkles size = {20}></Sparkles>Hobbies
//                 </a> */}
//                 <a href="#contact"onClick={closeMenu} className={styles} title="Contact">
//                     <Mail size = {20}></Mail>Contact
//                 </a>
//             </>
//         )
      