import styled from "styled-components"

export const AuthStyles = styled.div`
  padding: 2rem 0 5rem 0;
  .auth-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
      font-family: var(--title-font);
      color: var(--text-color);
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      width: 30%;

      input {
        padding: 0.7rem;
        outline: none;
        border: 1px solid lightgray;
        border-radius: 3px;
        width: 100%;
      }
      .pw-input {
        position: relative;

        .show-pw {
          font-size: 1.1rem;
          position: absolute;
          right: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: var(--text-color);
        }
      }

      .password-strength-text {
        font-size: 0.8rem;
        color: var(--text-color);
      }
      .password-rules {
        font-size: 0.7rem;
      }

      .password-strength-meter {
        height: 0.3rem;
        background: lightgrey;
        border-radius: 3px;
        margin: 0;
      }
      .password-strength-meter::before {
        content: "";
        background-color: ${(props) =>
          (props.passwordStrength &&
            ["red", "yellow", "#03a2cc", "#03a2cc", "#0ce052"][
              props.passwordStrength - 1
            ]) ||
          ""};
        height: 100%;
        width: ${(props) =>
          props.passwordStrength && (props.passwordStrength / 5) * 100}%;
        display: block;
        border-radius: 3px;
        transition: width 0.2s;
      }

      p {
        font-size: 0.85rem;
      }

      button {
        padding: 0.7rem;
        border: none;
        background: var(--main-color);
        color: #fff;
        border-radius: 3px;
        letter-spacing: 1px;
      }
    }
    p {
      font-size: 0.9rem;

      a {
        text-decoration: underline;
        color: var(--main-color);
      }
    }
  }
`
