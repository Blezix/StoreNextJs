import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

interface TextProps extends TypographyProps {
  variant: "h1" | "h2" | "body1" | "body2" | "h3" | "h4" | "h5" | "h6" | "";
  children: React.ReactNode;
}

const variantStyles = {
  h1: {
    fontSize: {
      xs: "3rem",
      sm: "4rem",
      md: "4rem",
      lg: "5rem",
      xl: "6rem",
    },
  },
  h2: {
    fontSize: {
      xs: "1.75rem",
      sm: "2rem",
      md: "2.5rem",
      lg: "3rem",
      xl: "3.5rem",
    },
  },
  h3: {
    fontSize: {
      xs: "1.5rem",
      sm: "1.75rem",
      md: "2rem",
      lg: "2.5rem",
      xl: "3rem",
    },
  },
  h4: {
    fontSize: {
      xs: "1.25rem",
      sm: "1.5rem",
      md: "1.75rem",
      lg: "2rem",
      xl: "2.5rem",
    },
  },
  h5: {
    fontSize: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.75rem",
      xl: "2rem",
    },
  },
  h6: {
    fontSize: {
      xs: "0.8rem",
      sm: "1rem",
      md: "1.1rem",
      lg: "1.2rem",
      xl: "1.25rem",
    },
  },
  body1: {
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.375rem",
    },
  },
  body2: {
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.20rem",
    },
  },
};

const Text: React.FC<TextProps> = ({ variant, children, sx, ...props }) => {
  return (
    <Typography
      variant={variant}
      sx={{
        ...variantStyles[variant],
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default Text;
