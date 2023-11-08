import { FunctionComponent, PropsWithChildren, useMemo } from "react";

type TypographyVariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

interface TypographyProps {
  variant: TypographyVariantType;
  classes: string;
}

export const Typography: FunctionComponent<
  PropsWithChildren<TypographyProps>
> = ({ children, variant, classes }, props) => {

  const TextComponent = variant;

  return <TextComponent className={classes}>{children}</TextComponent>;
};

Typography.defaultProps = {
  variant: "p",
};
