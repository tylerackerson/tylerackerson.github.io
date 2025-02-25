import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon, Bike } from 'lucide-react';
import profileImage from './assets/profile.jpg';

const LandingPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [easterEgg, setEasterEgg] = useState(false);
  const [overscrollCount, setOverscrollCount] = useState(0);
  const [isOverscrolling, setIsOverscrolling] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (atBottom ) {
        if (!isOverscrolling) {
          setOverscrollCount((prev) => Math.min(prev + 8, 30));
          setIsOverscrolling(true);
        }
      } else {
        setIsOverscrolling(false);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      if (atBottom && event.deltaY > 100) {
        if (!isOverscrolling) {
          console.log("overscrolling");
          setOverscrollCount((prev) => Math.min(prev + 1, 30));
          setIsOverscrolling(true);
        } else {
          setIsOverscrolling(false);
        }
      }
    };

    const handleTouchEnd = () => {
      setIsOverscrolling(false);
    };

    document.addEventListener("scroll", handleScroll);
    document.addEventListener("wheel", handleWheel);
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("scroll", handleScroll);
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("touchend", handleTouchEnd);
    }
  }, [isOverscrolling]);

  useEffect(() => {
    console.log(overscrollCount);
    if (overscrollCount >= 30) {
      setEasterEgg(true);
    }
  }, [overscrollCount]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center justify-center p-4 relative font-mono`}>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800'} shadow-md`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <div className={`max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-hidden`}>
        <div className={`bg-gradient-to-r h-32 ${darkMode ? 'from-teal-100 to-gray-800' : 'from-slate-600 to-slate-900'} `} />
        
        <div className="relative px-6 pb-6">
          <div className="flex justify-center">
            <div className="relative -mt-16">
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-32 w-32 flex items-center justify-center border-4 ${darkMode ? 'border-gray-800' : 'border-white'} shadow-md overflow-hidden`}>
                <img 
                  src={profileImage} 
                  alt="Tyler Ackerson" 
                  className="h-32 w-32 object-scale-down" 
                />
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4 font-mono">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tyler Ackerson</h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Software Engineer{easterEgg ? <sup><i> (and Athlete)</i></sup> : null}</p>
            
            <p className={`mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Feel free to reach out!
            </p>
            
            <div className="mt-3 flex flex-wrap justify-center gap-3 ">
              <a 
                href="https://www.linkedin.com/in/tylerackerson/"
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-250 transform transition duration-250 hover:scale-105`}
              >
                <Linkedin className="mr-2 text-blue-400" size={20} />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="mailto:tyler.a.ackerson@gmail.com"
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-250 transform transition duration-250 hover:scale-105`}
              >
                <Mail className="mr-2 text-red-400" size={20} />
                <span>Email</span>
              </a>

              <a 
                href="https://github.com/tylerackerson"
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-250 transform transition duration-250 hover:scale-105`}
              >
                <Github className="mr-2" size={20} />
                <span>GitHub</span>
              </a> 
              {easterEgg ? 
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
                  <a 
                    href="https://www.strava.com/athletes/tyyyyy"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-250 transform transition duration-250 hover:scale-105`}
                  >
                    <Bike className="mr-2 text-orange-600" size={20} />
                    <span>Strava</span>
                  </a>
              </div> : null
            }
            </div>
          </div>
        </div>
      </div>
      
      <footer className={`mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm font-mono`}>
        © {new Date().getFullYear()} Tyler Ackerson
      </footer>
    </div>
  );
};

export default LandingPage;