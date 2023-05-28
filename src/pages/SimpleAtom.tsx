import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/simpleAtom.md?raw";
import { Counter } from "../components/Counter";

export const SimpleAtom = () => {
  return (
    <Box>
      <Markdown text={md} />
      <Counter />
    </Box>
  );
};
