import styled from "styled-components"

export const SingleBlogStyles = styled.div`
  .single-blog-container {
    max-width: 910px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem 0 5rem 0;

    .blog-content-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      border: 1px solid lightgray;
      padding: 4rem 4.5rem;

      .blog-date {
        display: flex;
        gap: 0.5rem;
        font-size: 0.9rem;
      }
      svg {
        font-size: 1.2rem;
        cursor: pointer;
      }

      .titles {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        h1 {
          font-family: var(--title-font);
          color: var(--text-color);
        }
      }

      .blog-content {
        img {
          width: 100%;
          height: 35rem;
          object-fit: cover;
        }
      }

      .share {
        border-top: 1px solid lightgray;
        border-bottom: 1px solid lightgray;
        padding: 1rem 0;
      }

      .like-view {
        p {
          font-size: 0.8rem;
          svg {
            font-size: 1.1rem;
            margin-bottom: 2.5px;
            color: red;
          }
        }
      }
    }

    .blog-comments {
      border: 1px solid lightgray;
      padding: 2rem 4.5rem;
      h5 {
        font-family: var(--title-font);
      }

      input {
        padding: 0.8rem;
        outline: none;
      }
      .button-group {
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        padding: 0;

        button {
          padding: 0.5rem 1rem;
          border: none;
          font-size: 0.9rem;
          background: var(--main-color);
          color: #fff;

          &:disabled {
            opacity: 50%;
          }
          &:nth-child(1) {
            color: var(--main-color);
            background: transparent;
          }
        }
      }
    }
  }
`
