import React, { ComponentPropsWithoutRef, FC } from "react";
import { joinStrings } from "../../../utils";
import "./button.scss";

type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  buttonSize?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  type: "button" | "submit" | "reset";
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  buttonSize = "auto",
  type,
  className,
}) => {
  return (
    <button
      className={joinStrings(["button", `button--${buttonSize}`, className])}
      type={type}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};
