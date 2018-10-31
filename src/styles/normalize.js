import { injectGlobal } from 'styled-components'

export default () =>
  injectGlobal`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      
      &::before,
      &::after {
        box-sizing: border-box;
      }
    }

    html, body, #root {
      height: 100%;
    }
  
    @-ms-viewport{
      width: device-width;
    }
  `
