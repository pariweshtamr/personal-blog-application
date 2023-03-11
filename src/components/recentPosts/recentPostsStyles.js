import styled from "styled-components"

export const RecentPostsStyles = styled.div`
  padding: 5rem 17.5rem;
  h1 {
    color: var(--heading-color);
  }

  .recent-posts {
    gap: 2rem;
    .recent-post {
      height: 353.25px;
      display: flex;
      gap: 2rem;
      img {
        height: 100%;
        width: auto;
      }
      .post-right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem 0;
        p {
          &:nth-child(1) {
            font-size: 0.75rem;
            color: gray;
          }
          &:nth-child(2) {
            font-size: 0.9rem;
            color: gray;
            font-weight: 300;
          }
          &:nth-child(4) {
            font-size: 0.75rem;
            color: gray;
            font-weight: 300;
          }
        }

        .right-body {
          h3 {
            color: var(--heading-color);
            font-weight: 300;
            letter-spacing: 2px;
          }
        }
      }
    }
  }
`
