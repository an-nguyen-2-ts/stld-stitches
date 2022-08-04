import { createStitches } from '@stitches/react';

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
      '12px': 'calc(12rem/ 16)',
      '13px': 'calc(13rem / 16)',
      '14px': 'calc(14rem / 16)',
      '16px': 'calc(16rem / 16)',
      '18px': 'calc(18rem / 16)',
      '24px': 'calc(24rem / 16)',
      '28px': 'calc(28rem / 16)',
      '36px': 'calc(36rem / 16)',
      // ---
      smallText: '$12px',
      articleDate: '$13px',
      footerMenu: '$14px',
      topics: '$16px',
      topicM: '$20px',
      label: '$16px',
      description: '$16px',
      titleS: '$18px',
      titleM: '$24px',
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
