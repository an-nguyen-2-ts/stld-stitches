import type { NextPage } from 'next';
import { styled } from '../styles/stitches.config';

const Container = styled('div', {
  maxWidth: '500px',
  width: '100%',
  margin: '20px auto',
  border: '1px solid $primary',
  height: 'calc(100vh - 40px)',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    size: {
      1: {
        maxWidth: '300px',
      },
      2: {
        maxWidth: '585px',
      },
      3: {
        maxWidth: '865px',
      },
    },
  },
});

const Button = styled('button', {
  background: '$red',
  padding: '7px 20px',
  color: '$white',
  fontSize: '$18px',
  display: 'block',
  cursor: 'pointer',
  mt: '10px',
  mx: '20px',

  '@pd480': {
    fontSize: '$16px',
    background: '$secondary',
  },
});

const ButtonVariant = styled('button', {
  background: '$link',
  padding: '$large',
  fontSize: '$12px',
  color: '$white',
  display: 'block',
  cursor: 'pointer',
  fontWeight: '$bold',

  variants: {
    pureMargin: {
      true: {
        margin: '0 $large',
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
    borderColor: '$white',
  },
});

const Text = styled('p', {
  color: '$primary',
});

const Home: NextPage = () => {
  return (
    <Container size={{ '@initial': '1', '@pd640': '2' }}>
      <Text>Hello Stitches demo</Text>

      <Button>RESPONSIVE BUTTON</Button>

      <br />

      <ButtonVariant pureMargin>VARIANT BUTTON</ButtonVariant>

      <br />

      <ButtonInherit pureMargin>Inherit Variant Button</ButtonInherit>

      <Text
        css={{
          color: '$secondary',
          m: '$large',
          border: '1px solid $primary',
          padding: '$medium',
        }}
      >
        this test using `css` props, with utils, variants
      </Text>
    </Container>
  );
};

export default Home;
