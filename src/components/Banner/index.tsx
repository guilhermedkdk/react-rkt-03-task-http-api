import { InfoBannerContainer } from "./styles";

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

export function Banner({ home, user, repository}: BannerProps) {
  if (home) {
    return (
      <InfoBannerContainer>
        <h2>{home.title}</h2>
      </InfoBannerContainer>
    );
  }
}
