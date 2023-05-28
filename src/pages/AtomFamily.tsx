import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/atomFamily.md?raw";

export const AtomFamily = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
