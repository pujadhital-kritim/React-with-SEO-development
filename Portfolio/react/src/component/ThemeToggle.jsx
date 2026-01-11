import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    
    <button
  onClick={toggleTheme}
  className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700
             text-slate-900 dark:text-slate-100 transition-colors"
>
  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
</button>

  );
};

export default ThemeToggle;