import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Banner } from "../../components/Banner";
import { Loading } from "../../components/Loading";
import { Input } from "../../components/Input";
import { api } from "../../libs/axios";

import { UserContainer } from "./styles";

interface UserInfo {
  avatarUrl: string;
  bio: string;
  company: string;
  following: number;
  htmlUrl: string;
  name: string;
  login: string;
}

export function User() {
  const { user } = useParams();

  const [search, setSearch] = useState("");
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [isLoadingUserInfo, setIsLoadingUserInfo] = useState(true);

  async function fetchUser() {
    const { data } = await api.get(`/users/${user}`);

    setUserInfo({
      avatarUrl: data.avatar_url,
      bio: data.bio,
      company: data.company,
      following: data.following,
      htmlUrl: data.html_url,
      name: data.name,
      login: data.login,
    });
    setIsLoadingUserInfo(false);
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContainer>
      {isLoadingUserInfo ? <Loading /> : <Banner user={userInfo} />}

      <Input
        placeholder="Buscar repositório"
        onChange={(event) => setSearch(event.target.value)}
      />
    </UserContainer>
  );
}
