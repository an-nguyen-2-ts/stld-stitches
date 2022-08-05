import { useContext } from 'react';

import { ThemeModeContext } from 'src/contexts/themeMode';

function useThemeMode() {
  const themeModeState = useContext(ThemeModeContext);

  if (typeof themeModeState === 'undefined') {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return themeModeState;
}

export default useThemeMode;
