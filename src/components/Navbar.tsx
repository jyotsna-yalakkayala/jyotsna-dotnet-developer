import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Replace this URL with the link to your externally hosted resume 
  // (e.g., Google Drive, Dropbox, or personal website)
  const resumeUrl = '/resume/your-resume.pdf';
  // const resumeUrl = 'https://drive.google.com/file/d/YOUR_GOOGLE_DRIVE_FILE_ID/view?usp=sharing';
  // const resumeUrl = 'https://yourpersonalwebsite.com/resume.pdf';

  const navLinks = [{
    name: 'Home',
    to: '/'
  }, {
    name: 'About',
    to: '#about'
  }, {
    name: 'Experience',
    to: '#experience'
  }, {
    name: 'Skills',
    to: '#skills'
  }, {
    name: 'Services',
    to: '#services'
  }, {
    name: 'Portfolio',
    to: '#portfolio'
  }, {
    name: 'Contact',
    to: '#contact'
  }];
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <Link to="/" className="font-bold text-xl text-primary">Jyotsna Yalakkayala</Link>
        
        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, index) => <a key={index} href={link.to} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors">
              {link.name}
            </a>)}
          <Button size="sm" variant="default" className="ml-2" asChild>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link, index) => <a key={index} href={link.to} className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
              <Button size="sm" variant="default" className="mt-2" asChild>
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </nav>
          </div>
        </div>}
    </header>;
};
export default Navbar;