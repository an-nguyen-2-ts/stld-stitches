import { createStitches } from '@stitches/react';

const pixelToRem = (px: number) => px / 16;

export const { getCssText, styled } = createStitches({
  theme: {
    colors: {
      primary: '#fbc500',
      secondary: '#f08200',
      link: '#f15a22',
      text: '#1b1b1b',
      white: '#ffffff',
      gray: '#6b6b6b',
      red: '#df0000',
    },
    fontSizes: {
      '12px': `${pixelToRem(12)}rem`,
      '13px': `${pixelToRem(13)}rem`,
      '14px': `${pixelToRem(14)}rem`,
      '16px': `${pixelToRem(16)}rem`,
      '18px': `${pixelToRem(18)}rem`,
      '24px': `${pixelToRem(24)}rem`,
      '28px': `${pixelToRem(28)}rem`,
      '36px': `${pixelToRem(36)}rem`,
    },
  },
  media: {
    pd480: '(min-width: 480px)',
    pd640: '(min-width: 640px)',
    pd768: '(min-width: 768px)',
    pd1200: '(min-width: 1024px)',
  },
  utils: {
    m: (value: string | number) => ({
      margin: value,
    }),
  },
});
