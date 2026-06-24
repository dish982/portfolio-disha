import { Home, User, FileText, Code, Sparkles, Mail, Sun, Moon, Menu, X} from 'lucide-react'
import { useState, useEffect } from 'react'

function Navbar() {
    const [dark, setDark] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  const NavLinks = ({ styles, closeMenu }) => (
            <>
                {/* navbar all sections */}
                <a href="#about" onClick={closeMenu} className={styles} title="About">
                    <User size = {20}></User>About
                </a>
                <a href="#skills"onClick={closeMenu} className={styles} title="Skills">
                    <FileText size = {20}></FileText>Skills
                </a>
                <a href="#projects"onClick={closeMenu} className={styles} title="Projects">
                    <Code size = {20}></Code>Projects
                </a>
                {/* <a href="#extra"onClick={closeMenu} className={styles} title="Hobbies">
                    <Sparkles size = {20}></Sparkles>Hobbies
                </a> */}
                <a href="#contact"onClick={closeMenu} className={styles} title="Contact">
                    <Mail size = {20}></Mail>Contact
                </a>
            </>
        )

    const toggleDarkMode = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'light' : 'dark');
    };

    const navLinkStyles = 'flex items-center gap-2 text-red-wine px-4 py-2 hover:bg-red-wine hover:text-oat-milk hover:rounded-full hover:border';

    return(
        <>
        <nav className='fixed top-6 left-1/2 -translate-x-1/2 z-50'>
            
            {/* main navbar conatiner */}
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

                {/* theme toggle button */}
                {/* <button onClick={toggleDarkMode} 
                className="p-2 rounded-full hover:bg-rose-quartz dark:hover:bg-red-wine transition-colors text-red-wine">
                    {dark ? <Sun size= {20}/> : <Moon size={20}/>}
                </button> */}

            </div>

            {/* mobile menu overlay */}

            {isOpen && (
                <div className='absolute bg-white/95 border border-red-wine/20 p-2 flex flex-col gap-2 shadow-2xl md:hidden animate-in fade-in zoom-in duration-300'>
                    <NavLinks styles={navLinkStyles} closeMenu = {() => setIsOpen(false)}/>
                </div>
            )}
            
        </nav>
      
        </>
    )
}

export default Navbar