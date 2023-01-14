import React, { FC } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/close";

type ActionButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const ActionButton: FC<ActionButtonProps> = ({ isOpen, onClick }) => {
  if (isOpen) {
    return (
      <Fab color="primary" aria-label="close" onClick={onClick}>
        <CloseIcon />
      </Fab>
    );
  }

  return (
    <Fab color="primary" aria-label="add" onClick={onClick}>
      <AddIcon />
    </Fab>
  );
};
