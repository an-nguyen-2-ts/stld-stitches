import type { NextPage } from 'next';
import { styled } from '../styles/stitches.config';

const Wrapper = styled('div', {
  maxWidth: '500px',
  width: '100%',
  margin: '20px auto',
  border: '1px solid $gray',
  height: 'calc(100vh - 40px)',
});

const Button = styled('button', {
  background: '$red',
  padding: '4px 20px',
  color: '$white',
  fontSize: '$18px',
  display: 'block',

  '@pd480': {
    fontSize: '$16px',
    background: '$secondary',
  },
});

const Home: NextPage = () => {
  return (
    <Wrapper>
      hello
      <Button>Red on 480px</Button>
    </Wrapper>
  );
};

export default Home;
