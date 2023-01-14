import React, { useState, useContext, FC } from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardActions,
  Button,
  CardContent,
  Typography,
} from "@mui/material";
import { UserContext } from "../context/userContext";
import { ActionButton, ProgressBar } from "../components";
import { useRelist } from "../hooks";

export const HomePage: FC = () => {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const {
    isLoading,
    relistItems,
    productCount: { total, relisted },
  } = useRelist({
    userId: user?.userData?.id as number,
  });

  const handleOnClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }}
    >
      {isOpen && (
        <Card sx={{ height: 300, width: 300, marginRight: 1 }}>
          <CardHeader
            avatar={
              <Avatar
                alt="depop profile picture"
                srcSet={user?.userData?.picture?.[75]}
              >
                {user?.userData?.initials.toUpperCase()}
              </Avatar>
            }
            title="Welcome back"
            subheader={`${user?.userData?.first_name} ${user?.userData?.last_name}`}
          />

          {isLoading && (
            <CardContent>
              <ProgressBar value={(relisted / total) * 100} />
            </CardContent>
          )}
          <CardActions>
            <Button
              fullWidth
              variant="contained"
              disabled={isLoading}
              onClick={relistItems}
            >
              Relist Unsold items
            </Button>
          </CardActions>
        </Card>
      )}

      <ActionButton isOpen={isOpen} onClick={handleOnClick} />
    </Box>
  );
};
