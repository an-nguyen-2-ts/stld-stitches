import { styled } from 'styles/stitches.config';
import useThemeMode from 'src/hooks/useThemeContext';

const Header = styled('header', {
  background: '$primary',
  color: '$text',
  padding: '20px 50px',
  display: 'flex',
  justifyContent: 'space-between',
});

const ButtonToggle = styled('button', {
  background: '$white',
  color: '$text',
  border: '1px solid $text',
  borderRadius: '3px',
  padding: '5px 10px',

  '&:hover': {
    transition: '0.2s ease',
    background: '$text',
    color: '$white',
  },
});

export default function Index() {
  const { themeMode, toggleThemeMode } = useThemeMode();

  return (
    <Header>
      <span>{themeMode && themeMode.toUpperCase()} MODE</span>
      <ButtonToggle type="button" onClick={toggleThemeMode}>
        Change theme
      </ButtonToggle>
    </Header>
  );
}
