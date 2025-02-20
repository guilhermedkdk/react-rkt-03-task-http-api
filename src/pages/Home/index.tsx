import { useState } from "react";

import { Banner } from "../../components/Banner";
import { Input } from "../../components/Input";

import { HomeContainer } from "./styles";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <HomeContainer>
      <Banner
        home={{
          title: "Pesquise por alguma conta do Github",
        }}
      />

      <Input
        placeholder="Buscar conta"
        onChange={(event) => setSearch(event.target.value)}
      />
    </HomeContainer>
  );
}
