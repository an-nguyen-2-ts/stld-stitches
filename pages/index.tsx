import type { NextPage } from 'next';
import { styled } from '../styles/stitches.config';

const Wrapper = styled('div', {
  maxWidth: '500px',
  width: '100%',
  margin: '20px auto',
  border: '1px solid $gray',
  height: 'calc(100vh - 40px)',
  display: 'flex',
  flexDirection: 'column',
});

const Button = styled('button', {
  background: '$red',
  padding: '7px 20px',
  color: '$white',
  fontSize: '$18px',
  display: 'block',
  cursor: 'pointer',
  mt: '10px',
  ml: '20px',

  '@pd480': {
    fontSize: '$16px',
    background: '$secondary',
  },

  variants: {
    pureMargin: {
      true: {
        marginTop: '$15px',
        height: '$size$adu',
      },
    },
  },
});

const ButtonVariant = styled('button', {
  background: '$link',
  padding: '$sm $xs',
  fontSize: '$12px',
  color: '$white',
  display: 'block',
  cursor: 'pointer',
  fontWeight: '$bold',

  variants: {
    pureMargin: {
      true: {
        margin: '$sm $xs',
      },
    },
  },
});

const ButtonInherit = styled(ButtonVariant, {
  background: '$white',
  color: '$text',
  border: '1px solid $text',
  borderRadius: '5px',

  '&:hover': {
    transition: '0.2s ease',
    background: '$text',
    color: '$white',
  },
});

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Button>RESPONSIVE BUTTON</Button>

      <br />

      <ButtonVariant pureMargin>VARIANT BUTTON</ButtonVariant>

      <br />

      <ButtonInherit pureMargin>Inherit Variant Button</ButtonInherit>
    </Wrapper>
  );
};

export default Home;
