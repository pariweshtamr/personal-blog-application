import styled from "styled-components"

export const HeaderStyles = styled.header`
  .navbar {
    height: 22vh;

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1370px;

      .nav-left {
        h1 {
          color: var(--main-color);
        }
      }

      .nav-items {
        display: flex;
        gap: 5rem;
        padding-right: 10rem;
      }
    }
  }
`
