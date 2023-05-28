import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import { atom } from "jotai";
import md from "../slides/simpleAtom.md?raw";
import { Counter } from "../components/Counter";

const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom - simple atom demo";

export const SimpleAtom = () => {
  return (
    <Box>
      <Markdown text={md} />
      <Counter />
    </Box>
  );
};
