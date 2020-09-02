import useLocalStorage from "./useLocalStorage"


export default function useDarkMode(bool) {
  const [darkMode, setDarkMode] = useLocalStorage('darktheme', bool);
  return [darkMode, setDarkMode];
}