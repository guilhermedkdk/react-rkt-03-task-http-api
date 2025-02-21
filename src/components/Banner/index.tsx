import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  SquareArrowOutUpRight,
  GithubIcon,
  Building,
  Users,
} from "lucide-react";

import {
  Avatar,
  Header,
  Info,
  InfoBannerContainer,
  Main,
  NavBar,
} from "./styles";

type Home = {
  title: string;
};

type User = {
  avatarUrl: string;
  bio: string;
  company: string;
  following: number;
  htmlUrl: string;
  name: string;
  login: string;
};

type Repository = {
  name: string;
  createdAt: string;
  htmlUrl: string;
  description: string;
  stargazersCount: number;
  openIssues: number;
};

interface BannerProps {
  home?: Home;
  user?: User;
  repository?: Repository;
}

export function Banner({ home, user, repository }: BannerProps) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  if (home) {
    return (
      <InfoBannerContainer>
        <h2>{home.title}</h2>
      </InfoBannerContainer>
    );
  }

  if (user) {
    return (
      <InfoBannerContainer>
        <NavBar>
          <button onClick={handleGoBack}>
            <ChevronLeft />
            <span>Voltar</span>
          </button>

          <button>
            <a target="_blanck" href={user.htmlUrl}>
              <span>Github</span>
              <SquareArrowOutUpRight />
            </a>
          </button>
        </NavBar>

        <Main>
          <Avatar src={user.avatarUrl} />
          <div>
            <Header>
              <h2>{user.name}</h2>
            </Header>

            <p>{user.bio}</p>

            <Info>
              <div>
                <GithubIcon />
                {user.login}
              </div>

              <div>
                <Building />
                {user.company}
              </div>

              <div>
                <Users />
                {user.following} seguidores
              </div>
            </Info>
          </div>
        </Main>
      </InfoBannerContainer>
    );
  }
}
