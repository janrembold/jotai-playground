import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/devTools.md?raw";

export const DevToolsPage = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
