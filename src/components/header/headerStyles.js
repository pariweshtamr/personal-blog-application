import styled from "styled-components"

export const HeaderStyles = styled.header`
  font-family: "Avenir Light", sans-serif;

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
          font-family: var(--title-font);
          font-size: 45px;
        }
        p {
          font-weight: 300;
        }
      }

      .nav-items {
        display: flex;
        gap: 5rem;
        padding-right: 8rem;
      }
    }
  }
`
