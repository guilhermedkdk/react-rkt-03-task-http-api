import { Outlet } from "react-router-dom";

import { Header, LogoContainer, Main } from "./styles";

import coverImg from "../../assets/cover.png";
import logoImg from "../../assets/logo.png";

export function DefaultLayout() {
  return (
    <>
      <Header>
        <img src={coverImg} alt="Cover" className="cover" />

        <LogoContainer>
          <img src={logoImg} alt="Logo" />
        </LogoContainer>
      </Header>

      <Main>
        <Outlet />
      </Main>
    </>
  );
}
