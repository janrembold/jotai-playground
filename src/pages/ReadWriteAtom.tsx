import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/readwrite.md?raw";

export const ReadWriteAtom = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
