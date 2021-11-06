import React, { ComponentPropsWithoutRef, FC } from "react";
import { joinStrings } from "../../../utils";
import "./button.scss";

type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  buttonSize?: ButtonSize;
  className?: string;
  icon?: React.ReactNode;
  type: "button" | "submit" | "reset";
  isDisabled?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  buttonSize = "auto",
  type,
  className,
  isDisabled = false,
}) => {
  return (
    <button
      className={joinStrings([
        "button",
        `button--${buttonSize}`,
        isDisabled && "button--disabled",
        className,
      ])}
      type={type}
      disabled={isDisabled}
      onClick={onClick && !isDisabled ? onClick : undefined}
    >
      {children}
    </button>
  );
};
