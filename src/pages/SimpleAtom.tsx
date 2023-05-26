import { Box, Button } from "@mui/material";
import { Markdown } from "../components/Markdown";
import { useAtom } from "jotai";
import { counterAtom } from "../store/counterAtom";

import md from "../slides/simpleAtom.md?raw";

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
