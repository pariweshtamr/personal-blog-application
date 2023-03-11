import styled from "styled-components"

export const HeroStyles = styled.div`
  width: 100%;

  .hero-left {
    padding: 0;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .hero-right {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem 10rem;

    img {
      width: 100%;
      height: auto;
    }
    h4 {
      margin-bottom: -0.8rem;
    }

    button {
      display: flex;
      width: max-content;
      margin: auto;
      padding: 0.8rem 2.5rem;
      background: transparent;
      color: gray;
      border: 1px solid #000;

      &:hover {
        color: var(--main-color);
      }
    }
  }
`
