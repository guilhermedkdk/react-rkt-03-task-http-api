import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useNavigate } from "react-router-dom";

import {
  ChevronLeft,
  SquareArrowOutUpRight,
  GithubIcon,
  Building,
  Users,
  CalendarClock,
  Calendar,
  MessageSquare,
  Star,
  CircleDot,
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

type Issue = {
  htmlUrl: string;
  title: string;
  userLogin: string;
  comments: number;
  createdAt: string;
};

interface BannerProps {
  home?: Home;
  user?: User;
  repository?: Repository;
  issue?: Issue;
}

export function Banner({ home, user, repository, issue }: BannerProps) {
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
              <SquareArrowOutUpRight width={20} />
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

  if (repository) {
    const dateFormatted = formatDistanceToNow(new Date(repository.createdAt), {
      locale: ptBR,
      addSuffix: true,
    });
    const dateTitle = format(new Date(repository.createdAt), "dd/MM/yyyy");

    return (
      <InfoBannerContainer>
        <NavBar>
          <button onClick={handleGoBack}>
            <ChevronLeft />
            <span>Voltar</span>
          </button>

          <button>
            <a target="_blanck" href={repository.htmlUrl}>
              <span>Github</span>
              <SquareArrowOutUpRight width={20} />
            </a>
          </button>
        </NavBar>
        <Header>
          <h2>{repository.name}</h2>
        </Header>

        <p>{repository.description}</p>

        <Info>
          <div title={dateTitle}>
            <CalendarClock width={20} />
            <span>{dateFormatted}</span>
          </div>

          <div>
            <Star width={20} />
            {repository.stargazersCount} Stars
          </div>

          <div>
            <CircleDot width={20} />
            {repository.openIssues} Open Issues
          </div>
        </Info>
      </InfoBannerContainer>
    );
  }

  if (issue) {
    const dateFormatted = formatDistanceToNow(new Date(issue.createdAt), {
      locale: ptBR,
      addSuffix: true,
    });
    const dateTitle = format(new Date(issue.createdAt), "dd/MM/yyyy");

    return (
      <InfoBannerContainer>
        <NavBar>
          <button onClick={handleGoBack}>
            <ChevronLeft />
            <span>Voltar</span>
          </button>

          <button>
            <a target="_blanck" href={issue.htmlUrl}>
              <span>Github</span>
              <SquareArrowOutUpRight width={20} />
            </a>
          </button>
        </NavBar>

        <Header>
          <h2>{issue.title}</h2>
        </Header>

        <Info>
          <div>
            <GithubIcon width={20} />
            {issue.userLogin}
          </div>

          <div title={dateTitle}>
            <Calendar width={20} />
            <span>{dateFormatted}</span>
          </div>

          <div>
            <MessageSquare width={20} />
            {issue.comments} comentários
          </div>
        </Info>
      </InfoBannerContainer>
    );
  }

  return <></>;
}
