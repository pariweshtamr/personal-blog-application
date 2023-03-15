import styled from "styled-components"

export const BlogStyles = styled.div`
  padding: 2rem 16rem;

  .blog-container {
    max-width: 910px;
    h1 {
      font-family: var(--title-font);
      color: var(#414141);
      font-size: 48px;
      margin-bottom: 2rem;
    }
    .blog-cards {
      justify-content: space-between;
    }
  }
`