import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/atomWithDefault.md?raw";

export const AtomWithDefault = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
