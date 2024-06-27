import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("dark");

    const tonggleTheme = () => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      console.log(111111111);
    }

    const value = {
        theme,
        tonggleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            { children } 
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeProvider}