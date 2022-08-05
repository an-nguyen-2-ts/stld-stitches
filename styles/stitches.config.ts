import type * as Stitches from '@stitches/react';
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
      small: `${pixelToRem(5)}rem`,
      medium: `${pixelToRem(10)}rem`,
      large: `${pixelToRem(15)}rem`,
    },
    sizes: {
      xxs: '1px',
      xs: '3px',
      sm: '5px',
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
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'margin'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'margin'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
  },
});
