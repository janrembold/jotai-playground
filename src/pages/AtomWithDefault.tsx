import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/atomWithDefault.md?raw";
import { useAtom } from "jotai";
import { atomWithDefault as a } from "jotai/utils";

const bar = a(() => Date.now());

export const AtomWithDefault = () => {
  const foo = useAtom(bar);

  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
