import { InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isHomePage?: boolean;
}

export function Input({ isHomePage, ...props }: InputProps) {
  return <InputContainer isHomePage={isHomePage} {...props} />;
}
