import { Box, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { ColorPalette } from "../theme";

interface BlockquoteProps {
  children: ReactNode;
}

export const Blockquote = ({ children }: BlockquoteProps) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: "16px",
        mb: "16px",
        borderRadius: "16px",
        backgroundColor: ColorPalette.orange.lighter,
        "& > p": {
          mb: 0,
        },
        [theme.breakpoints.up("md")]: {
          p: "20px",
        },
      }}
    >
      {children}
    </Box>
  );
};
