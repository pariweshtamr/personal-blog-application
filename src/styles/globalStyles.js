import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`


    

    a {
  color: inherit;
  text-decoration: none;

  &:hover{
    color: var(--main-color);
  }


}

button{
    display: flex;
      width: max-content;
      margin: auto;
      padding: 0.8rem 3rem;
      background: transparent;
      color: gray;
      border: 1px solid #000;
  }
 
`
export default GlobalStyle
