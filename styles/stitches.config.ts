import { createStitches } from '@stitches/react';

const pixelToRem = (px: number) => px / 16;

export const { getCssText, styled } = createStitches({
  theme: {
    colors: {
      primary: '#fbc500',
      secondary: '#f08200',
      link: '#005993',
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
    fontWeights: {
      normal: '400',
      semiBold: '500',
      bold: '600',
    },
    space: {
      xxs: `${pixelToRem(5)}rem`,
      xs: `${pixelToRem(10)}rem`,
      sm: `${pixelToRem(15)}rem`,
    },
    sizes: {
      '1px': '1px',
      '3px': '3px',
      '5px': '5px',
    },
  },
  media: {
    pd480: '(min-width: 480px)',
    pd640: '(min-width: 640px)',
    pd768: '(min-width: 768px)',
    pd1200: '(min-width: 1024px)',
  },
  utils: {
    // Abbreviated margin properties
    m: (value: string | number) => ({
      margin: value,
    }),
    mt: (value: string | number) => ({
      marginTop: value,
    }),
    mr: (value: string | number) => ({
      marginRight: value,
    }),
    mb: (value: string | number) => ({
      marginBottom: value,
    }),
    ml: (value: string | number) => ({
      marginLeft: value,
    }),
    mx: (value: string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
