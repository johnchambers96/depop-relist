import React, { FC } from "react";
import { Button, ButtonProps } from "../button";
import './actionButton.scss';

export const ActionButton: FC<ButtonProps> = (props) => {
  return <Button {...props} className="button__action" />;
};
