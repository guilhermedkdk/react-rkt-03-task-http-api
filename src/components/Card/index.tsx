import { Avatar, CardContainer, Header } from "./styles";

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

interface CardProps {
  user?: User;
  repository?: Repository;
}

export function Card({ user, repository }: CardProps) {
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
}
