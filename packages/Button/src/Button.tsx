import React, { ButtonHTMLAttributes } from "react";
import { CSS } from "@kaiju-ui/theme";
import { ButtonVariants, Container } from "./styles";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "alternative" | "ghost";
  css?: CSS;
} & ButtonVariants;

function Button({
  children,
  loading = false,
  disabled = false,
  variant = "primary",
  css,
  ...rest
}: ButtonProps) {
  return (
    <Container
      disabled={loading || disabled}
      loading={loading}
      variant={variant}
      css={css}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </Container>
  );
}

export default Button;
