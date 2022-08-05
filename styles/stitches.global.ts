import { globalCss } from './stitches.config';

export default globalCss({
  '*': {
    margin: '0',
    padding: '0',
    fontFamily: '$defaultBody, -apple-system, system-ui, sans-serif',
  },
  body: {
    margin: '0',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '22px',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '@font-face': [
    {
      fontFamily: '$defaultBody',
      fontWeight: '400',
      src: "local('SVN-Gilroy'), url('public/font/SVNGilroy-Regular.otf') format('opentype')",
    },
    {
      fontFamily: '$defaultBody',
      fontWeight: '500',
      src: "local('SVN-Gilroy'), url('public/font/SVNGilroy-Medium.otf') format('opentype')local('SVN-Gilroy'), url('public/font/SVNGilroy-Medium.otf') format('opentype')",
    },
    {
      fontFamily: '$defaultBody',
      fontWeight: '700',
      src: "local('SVN-Gilroy'), url('public/font/SVNGilroy-Bold.otf') format('opentype')",
    },
  ],
});
