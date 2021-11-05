import React, { FC } from "react";
import './modal.scss';

export const Modal: FC = ({ children }) => {
  return <div className="relist-modal">{children}</div>;
};
