import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/atomWithReset.md?raw";

export const AtomWithReset = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
