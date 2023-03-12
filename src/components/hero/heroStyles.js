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
      font-size: 28px;
      margin-bottom: -0.8rem;
    }

    button {
      &:hover {
        color: var(--main-color);
      }
    }
  }
`
