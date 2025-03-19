import styled from "styled-components";
import { Cards } from "../Home/styles";

export const UserContainer = styled.main``;

export const UserCards = styled(Cards)`
  margin-top: -5.5rem;

  .loading {
    width: calc(50% - 1rem);
    transform: translateX(0);
  }

  @media (max-width: 900px) {
    .loading {
      width: 100%;
    }
  }
`;
