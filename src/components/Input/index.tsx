import { InputHTMLAttributes } from "react";

import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: "user" | "repository";
}

export function Input({ variant, ...props }: InputProps) {
  return <InputContainer variant={variant} {...props} />;
}
