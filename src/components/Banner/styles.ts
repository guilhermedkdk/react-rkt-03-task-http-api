import styled from "styled-components";

export const InfoBannerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme["profile"]};
  background: ${(props) => props.theme["profile"]};

  transform: translateY(-50%);

  p {
    margin-block: 1rem;
  }
`;
