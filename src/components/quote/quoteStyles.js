import styled from "styled-components"

export const QuoteStyles = styled.div`
  height: 100vh;
  background: var(--bg);
  .quote-row {
    display: flex;
    height: 100%;

    .quote-text {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      h1 {
        padding: 0 20%;
        font-family: var(--title-font);
        font-size: 3.2rem;
      }
      p {
        font-size: 1rem;
        font-family: var(--text-font);
      }
    }
    .quote-img {
      background: url("/img/quote-bg.jpg") center center no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
  }
`
