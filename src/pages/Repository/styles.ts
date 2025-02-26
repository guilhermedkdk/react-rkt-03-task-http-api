import styled from "styled-components";

export const BlogContainer = styled.main`
  max-width: calc(864px + 2rem);

  margin-inline: auto;
  padding-inline: 1rem;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: -5rem;
  margin-bottom: 0.75rem;

  h3 {
    font-size: 1.125rem;
    color: ${(props) => props.theme["subtitle"]};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme["span"]};
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin-block: 3rem;
  gap: 2rem;

  .loading {
    display: flex;
    flex-wrap: nowrap;

    gap: 2rem;
    width: 100%;

    div {
      transform: translateY(0);
      height: 260px;
    }
  }
`;
