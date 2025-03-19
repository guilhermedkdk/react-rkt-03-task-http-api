import styled from "styled-components";

export const HomeContainer = styled.main`
  .loading {
    height: 100px;
    width: calc(50% - 1rem);
    transform: translateX(0);
  }

  @media (max-width: 900px) {
    .loading {
      width: 100%;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding-block: 2rem;
  gap: 2rem;
`;
