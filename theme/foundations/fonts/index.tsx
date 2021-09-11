import { Global } from "@emotion/react"

const Fonts = (): JSX.Element => (
  <Global
    styles={`
      @font-face {
        font-family: 'ECB';
        src: local('Euclid Circular B Semi Bold'), local('Euclid-Circular-B-Semi-Bold'),
            url('/fonts/EuclidCircularB-SemiBold.woff2') format('woff2'),
            url('/fonts/EuclidCircularB-SemiBold.woff') format('woff'),
            url('/fonts/EuclidCircularB-SemiBold.ttf') format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'ECB';
        src: local('Euclid Circular B Regular'), local('Euclid-Circular-B-Regular'),
            url('/fonts/EuclidCircularB-Regular.woff2') format('woff2'),
            url('/fonts/EuclidCircularB-Regular.woff') format('woff'),
            url('/fonts/EuclidCircularB-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: 'ECB';
        src: local('Euclid Circular B Light'), local('Euclid-Circular-B-Light'),
            url('/fonts/EuclidCircularB-Light.woff2') format('woff2'),
            url('/fonts/EuclidCircularB-Light.woff') format('woff'),
            url('/fonts/EuclidCircularB-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
      }
      `}
  />
)

export default Fonts
