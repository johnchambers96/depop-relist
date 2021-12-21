import React, { FC, useState } from "react";
import { joinStrings } from "../../../utils";
import "./container.scss";

export const Container: FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
      <div
        className={joinStrings([
          "container__header",
          isOpen && "container__header--active",
        ])}
        onClick={handleOnClick}
      >
        Relist
      </div>
      {isOpen && <div className="container__child">{children}</div>}
    </div>
  );
};
