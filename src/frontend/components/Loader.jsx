import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Loader({ isLoading }) {
  return (
    <Backdrop
      sx={{
        color: `var(--primary-300)`,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
