import { createGlobalStyle } from 'styled-components';
 
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
 
  #root {
    margin: 0 auto;
  }
 
  html {
    background-color: #FFFFFF;    
  }
  @media (max-width: 916px): {
    header{
      display: none,
    }
  }
`;