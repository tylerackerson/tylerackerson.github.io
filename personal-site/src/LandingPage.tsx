import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText, Sun, Moon } from 'lucide-react';

const FinalLandingPage = () => {
  const [darkMode, setDarkMode] = useState(true); // Dark mode as default
  
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} flex flex-col items-center justify-center p-4 relative font-mono`}>
      {/* Dark mode toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`absolute top-4 right-4 p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-300' : 'bg-white text-gray-800'} shadow-md`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
      
      <div className={`max-w-md w-full ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105`}>
        <div className="bg-gradient-to-r from-emerald-500 to-blue-600 h-32"></div>
        
        <div className="relative px-6 pb-6">
          <div className="flex justify-center">
            <div className="relative -mt-16">
              <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-32 w-32 flex items-center justify-center border-4 ${darkMode ? 'border-gray-800' : 'border-white'} shadow-md overflow-hidden`}>
                {/* Replace this with actual image when available */}
                <span className={`${darkMode ? 'text-gray-200' : 'text-gray-700'} text-4xl font-bold font-mono`}>TA</span>
                {/* Uncomment this when you have an image 
                <img 
                  src="/api/placeholder/120/120" 
                  alt="Tyler Ackerson" 
                  className="h-32 w-32 object-cover" 
                />
                */}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4 font-mono">
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Tyler Ackerson</h1>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>Software Engineer</p>
            
            <p className={`mt-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Backend developer with experience in Kotlin, Go, and Python. 
              Currently exploring frontend technologies.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <a 
                href="https://www.linkedin.com/in/tylerackerson/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-300`}
              >
                <Linkedin className="mr-2 text-blue-400" size={20} />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/tylerackerson" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-300`}
              >
                <Github className="mr-2" size={20} />
                <span>GitHub</span>
              </a>
              
              <a 
                href="mailto:your.email@example.com" 
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-300`}
              >
                <Mail className="mr-2 text-red-400" size={20} />
                <span>Email</span>
              </a>
              
              <a 
                href="#" 
                className={`p-3 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'} text-white rounded-lg flex items-center hover:shadow-md transition-all duration-300`}
              >
                <FileText className="mr-2 text-green-400" size={20} />
                <span>Resume</span>
              </a>
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

export default FinalLandingPage;