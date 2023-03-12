import styled from "styled-components"

export const AboutCompStyles = styled.div`
  font-family: var(--text-font);
  background: var(--bg);

  .about-left {
    background: #fbf3ef;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7rem;
    img {
      height: 100%;
      width: auto;
    }
    .about-img {
      height: 60%;
    }
  }

  .about-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10rem;
    margin: auto;
    text-align: left;
    h1 {
      font-family: var(--title-font);
      font-size: 48px;
    }
    p {
      &:nth-child(2) {
        font-size: 1.1rem;
        opacity: 100%;
      }

      opacity: 80%;
      font-size: 0.95rem;
    }
    button {
      margin-top: 2rem;
    }
  }

  .about-right.page-right {
    bg
    margin: 0 auto;
    padding: 6.5rem 8.5rem 8.5rem 8.5rem;
  }
`
