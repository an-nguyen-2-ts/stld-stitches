import {
  useEffect,
  useCallback,
  useContext,
  createContext,
  ReactNode,
  useState,
  useRef,
} from 'react';

import { theme as lightTheme, dark as darkTheme } from '../../styles/stitches.config';

type ThemeMode = string;
type ThemeProvider = {
  themeMode: string;
  toggleThemeMode: () => void;
};
type AvailableTheme = {
  [x: string]: typeof lightTheme.className | typeof darkTheme.className;
};

const availableThemes: AvailableTheme = {
  light: lightTheme.className,
  dark: darkTheme.className,
};
const storeThemeKey = 'color-mode';

const storeThemeMode = (mode: ThemeMode) => {
  try {
    if (typeof mode === 'string') window.localStorage.setItem(storeThemeKey, mode);
  } catch (e) {
    console.warn(e);
  }
};

const getThemeMode = (): ThemeMode | null => {
  try {
    const savedMode = window.localStorage.getItem(storeThemeKey);
    // If the user has explicitly chosen a colour mode,
    // let's use it. Otherwise, this value will be null.
    if (typeof savedMode === 'string') return savedMode;
  } catch (e) {
    // When Chrome in incognito, localStorage cannot be accessed
    console.warn(e);
    return null;
  }
  return null;
};

const useThemeMode = (): ThemeProvider => {
  const [themeMode, setThemeMode] = useState('');
  const html = useRef<HTMLElement | null>(null);

  // Set color mode in localStorage, as well as in the html tag
  const applyColorMode = (newMode: ThemeMode) => {
    if (!html.current) return;

    html.current.classList.remove(availableThemes[themeMode]);
    html.current.classList.add(availableThemes[newMode]);
    storeThemeMode(newMode);
  };

  const toggleThemeMode = () => {
    const keys = Object.keys(availableThemes);
    let index = keys.indexOf(themeMode);
    if (index === keys.length - 1) {
      index = 0;
    } else if (index >= 0) {
      index = index + 1;
    }
    const newMode = keys[index];
    setThemeMode(newMode);
    applyColorMode(newMode);
  };

  // set initial theme mode
  useEffect(() => {
    let savedThemeMode = getThemeMode();
    if (savedThemeMode === null) {
      savedThemeMode = 'light';
    }
    html.current && html.current.classList.add(availableThemes[savedThemeMode]);
    setThemeMode(savedThemeMode);
  }, []);

  useEffect(() => {
    !html.current && (html.current = document.documentElement);
  }, []);

  return {
    themeMode,
    toggleThemeMode,
  };
};

type ThemeModeProviderProps = {
  children: ReactNode | null;
};

const ThemeModeContext = createContext<ThemeProvider>({
  themeMode: '',
  toggleThemeMode: () => '',
});

const ThemeModeProvider = ({ children }: ThemeModeProviderProps) => {
  const { themeMode, toggleThemeMode } = useThemeMode();
  return (
    <ThemeModeContext.Provider
      value={{
        themeMode,
        toggleThemeMode,
      }}
    >
      {children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeModeProvider, ThemeModeContext };
