import * as React from "react";
import { Snackbar } from "@mui/material/";

const CustomSnackbar = ({
  message,
  open,
  onClose,
  variant,
}: {
  message: string;
  open: boolean;
  onClose: () => void;
  variant: string;
}) => {
  return (
    <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      message={message}
      ContentProps={{
        sx: {
          backgroundColor:
            variant === "error"
              ? "red"
              : variant === "success"
                ? "green"
                : variant === "normal"
                  ? "#323232"
                  : "blue",
          color: "white",
          fontSize: "1rem",
          borderRadius: "8px",
          padding: "16px",
        },
      }}
    />
  );
};

export default CustomSnackbar;
