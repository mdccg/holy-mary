import { createGlobalStyle } from 'styled-components';
import InterBlack from './Inter/Inter-Black.ttf';
import InterBold from './Inter/Inter-Bold.ttf';
import InterExtraBold from './Inter/Inter-ExtraBold.ttf';
import InterExtraLight from './Inter/Inter-ExtraLight.ttf';
import InterLight from './Inter/Inter-Light.ttf';
import InterMedium from './Inter/Inter-Medium.ttf';
import InterRegular from './Inter/Inter-Regular.ttf';
import InterSemiBold from './Inter/Inter-SemiBold.ttf';
import InterThin from './Inter/Inter-Thin.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${InterBlack});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBold});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraBold});
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterExtraLight});
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterMedium});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegular});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterSemiBold});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterThin});
    font-weight: 100;
    font-style: normal;
  }
`;

export default FontStyles;