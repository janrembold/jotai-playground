import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/vanilla.md?raw";

export const Vanilla = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
