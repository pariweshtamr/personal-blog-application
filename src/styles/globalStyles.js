import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    

    a {
  color: inherit;
  text-decoration: none;

  &:hover{
    color: var(--main-color);
  }
}
`
export default GlobalStyle
