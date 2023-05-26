import { Box } from "@mui/material";
import intro from "../slides/introduction.md?raw";
import { Markdown } from "../components/Markdown";

export const Introduction = () => {
  return (
    <Box>
      <Markdown text={intro} />
    </Box>
  );
};
