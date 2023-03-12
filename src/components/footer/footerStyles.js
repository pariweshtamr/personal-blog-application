import styled from "styled-components"

export const FooterStyles = styled.footer`
  background: #414141;
  font-family: var(--text-font);
  color: #fff;

  .footer-left {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    .socials {
      display: flex;
      gap: 1rem;
    }
    .info {
      h3 {
        font-family: var(--title-font);
      }
      p {
        opacity: 80%;
        font-size: 0.9rem;
      }
    }
    .copyright {
      display: flex;
      flex-direction: column;
      opacity: 80%;
      font-size: 0.9rem;
    }
  }

  .footer-right {
    h3 {
      font-family: var(--title-font);
    }
    p {
      font-size: 1.2rem;
    }
    form {
      padding: 2rem 5rem 3rem 1rem;
      label {
        opacity: 70%;
      }
      input {
        background: transparent;
        border: none;
        outline: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        padding: 0 0 4px 0;

        &:hover {
          border-bottom: 1px solid var(--main-color);
        }
      }
      button {
        color: #fff;
        border: 1px solid #fff;
        padding: 0.8rem 4rem;
      }
    }
  }
`
