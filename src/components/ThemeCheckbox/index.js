import React, {
  useCallback,
  createContext,
  useContext,
  useEffect,
} from 'react';

import { useDarkMode } from '@constants/utils';
import { THEMES } from '@constants/colors';
import styles from './styles.module.scss';

export const ThemeContext = createContext();

function ThemeCheckbox() {
  const [isDark, setIsDark] = useDarkMode();
  const { setTheme } = useContext(ThemeContext);

  const handleChange = useCallback((e) => setIsDark(e.target.checked), [
    setIsDark,
  ]);

  useEffect(() => setTheme(isDark ? THEMES.dark : THEMES.default), [
    isDark,
    setTheme,
  ]);

  return (
    <>
      <input
        className={styles.input}
        type='checkbox'
        name='theme'
        id='theme'
        onChange={handleChange}
        checked={isDark}
      />
      <label className={styles.label} htmlFor='theme' />
    </>
  );
}

export default ThemeCheckbox;
