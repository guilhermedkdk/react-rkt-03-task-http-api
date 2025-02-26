import styled from "styled-components";

export const InputContainer = styled.input<{ variant?: "user" | "repository" }>`
  width: 100%;
  padding: 0.75rem 1rem;

  border: 1px solid ${(props) => props.theme["border"]};
  border-radius: 6px;

  background: ${(props) => props.theme["input"]};

  transform: translateY(
    ${
      (props) =>
        props.variant === "user"
          ? "-200%"
          : props.variant === "repository"
          ? "0%"
          : "-50%" // Default value
    }
  );

  &::placeholder {
    color: ${(props) => props.theme.label};
  }

  :focus {
    box-shadow: none;

    border-color: ${(props) => props.theme.blue};
  }
`;
