import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Avatar, CardContainer, Content, Header } from "./styles";

import { CalendarClock, CircleDot } from "lucide-react";

type User = {
  login: string;
  avatarUrl: string;
};

type Repository = {
  name: string;
  description: string;
  createdAt: string;
  openIssues: number;
};

type Issue = {
  title: string;
  createdAt: string;
  body: string;
  number: number;
};

interface CardProps {
  user?: User;
  repository?: Repository;
  issue?: Issue;
}

export function Card({ user, repository, issue }: CardProps) {
  if (user) {
    return (
      <CardContainer to={user.login}>
        <Header className="home">
          <Avatar src={user.avatarUrl} />
          <h3>{user.login}</h3>
        </Header>
      </CardContainer>
    );
  }

  if (repository) {
    const dateFormatted = formatDistanceToNow(new Date(repository.createdAt), {
      locale: ptBR,
      addSuffix: true,
    });
    const dateTitle = format(new Date(repository.createdAt), "dd/MM/yyyy");

    return (
      <CardContainer to={repository.name}>
        <Header>
          <h3>{repository.name}</h3>
          <div title={dateTitle}>
            <CalendarClock />
            <span>{dateFormatted}</span>
          </div>
        </Header>
        <Content>
          <p>{repository.description}</p>
          <span>
            <CircleDot />
            {repository.openIssues} Open Issues
          </span>
        </Content>
      </CardContainer>
    );
  }

  if (issue) {
    const dateFormatted = formatDistanceToNow(new Date(issue.createdAt), {
      locale: ptBR,
      addSuffix: true,
    });
    const dateTitle = format(new Date(issue.createdAt), "dd/MM/yyyy");

    return (
      <CardContainer to={issue.number.toString()}>
        <Header>
          <h3>{issue.title}</h3>
          <div title={dateTitle}>
            <CalendarClock />
            <span>{dateFormatted}</span>
          </div>
        </Header>
        <Content>
          <p>{issue.body}</p>
        </Content>
      </CardContainer>
    );
  }
}
