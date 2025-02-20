import styled from "styled-components";

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 300px;
  overflow: hidden;

  .cover {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }
`;

export const LogoContainer = styled.div`
  position: relative;

  transform: translateY(-36px);
`;

export const Main = styled.main`
  max-width: 900px;

  padding-inline: 1rem;
  margin-inline: auto;
`;
