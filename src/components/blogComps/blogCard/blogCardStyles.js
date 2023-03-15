import styled from "styled-components"

export const BlogCardStyles = styled.div`
  width: 454px;
  height: 660px;

  img {
    width: 100%;
    height: auto;
  }

  .card-bottom {
    border: 1px solid lightgray;
    padding: 1.8rem;

    .blog-date {
      display: flex;
      gap: 0.5rem;
      p,
      span {
        font-size: 0.8rem;
      }
      span {
        color: var(--text-color);
      }
    }

    svg {
      font-size: 1.2rem;
      cursor: pointer;
    }
    h5 {
      font-size: 23px;
    }
    p {
      opacity: 80%;
      font-size: 0.9rem;
    }

    .blog-likes {
      align-items: center;
      div {
        font-size: 0.8rem;

        svg {
          font-size: 1.1rem;
          margin-bottom: 2.5px;
          color: red;
        }
      }
    }
  }
`