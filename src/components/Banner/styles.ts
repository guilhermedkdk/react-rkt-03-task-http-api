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

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 1rem;

  button {
    display: flex;
    align-items: center;
    cursor: pointer;

    border: 2px solid transparent;
    padding-bottom: 0.25rem;
    gap: 0.5rem;

    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    font-size: 0.75rem;

    background: none;
    color: ${(props) => props.theme["blue"]};

    &:hover {
      transition: border-color 0.2s;

      border-bottom-color: ${(props) => props.theme["blue"]};
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      color: ${(props) => props.theme["blue"]};
    }
  }
`;

export const Main = styled.div`
  display: flex;
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;

  border-radius: 8px;
  margin-inline: 5rem;
`;

export const Header = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["span"]};
  }
`;
