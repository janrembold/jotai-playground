import { Box, Button } from "@mui/material";
import { Markdown } from "../components/Markdown";
import { atom, useAtom } from "jotai";
import md from "../slides/simpleAtom.md?raw";

const counterAtom = atom(0);

export const SimpleAtom = () => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <Box>
      <Markdown text={md} />
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        Pressed {count} times
      </Button>
    </Box>
  );
};
