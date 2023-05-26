import { Box, Button } from "@mui/material";
import { Markdown } from "../components/Markdown";
import { atom, useAtom } from "jotai";
import md from "../slides/suspense.md?raw";
import md2 from "../slides/suspense2.md?raw";
import { Suspense } from "react";

const delayedTextAtom = atom<string | Promise<string>>("");

const SuspenseContent = () => {
  const [text, setDelayedText] = useAtom(delayedTextAtom);

  return (
    <Box key={`key-${text}`}>
      <Markdown text={md} />
      <Button
        variant="outlined"
        onClick={() =>
          setDelayedText(
            new Promise((res) => setTimeout(() => res(Date.toString()), 4000))
          )
        }
        sx={{ mb: 4 }}
      >
        Trigger Suspense (4sec)
      </Button>
      <Markdown text={md2} />
    </Box>
  );
};

export const SuspenseComponent = () => (
  <Suspense fallback="Suspended loading....">
    <SuspenseContent />
  </Suspense>
);
