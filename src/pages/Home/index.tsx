import { HomeContainer } from "./styles";

import { Banner } from "../../components/Banner";

export function Home() {
  return (
    <HomeContainer>
      <Banner
        home={{
          title: "Pesquise por alguma conta do Github",
        }}
      />
    </HomeContainer>
  );
}
