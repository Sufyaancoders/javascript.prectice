import { createContext } from 'react';

interface themecontext {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<themecontext | null>({
  theme: "light",
  toggleTheme: () => {}
},


);