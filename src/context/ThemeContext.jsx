import React, { createContext, useState} from "react";

// Create Context 
export const ThemeContext = createContext();

// Membuat Provider
export default function themeProvider({children}) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );

}