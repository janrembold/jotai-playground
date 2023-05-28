import { Box, Button, Typography } from "@mui/material";
import { atom, useAtom } from "jotai";

const counterAtom = atom(0);
counterAtom.debugLabel = "counterAtom";

export const Counter = ({ title }: { title?: string }) => {
  const [count, setCount] = useAtom(counterAtom);

  return (
    <Box>
      {title ? <Typography variant="h5">{title}</Typography> : null}
      <Button variant="outlined" onClick={() => setCount(count + 1)}>
        Pressed {count} times
      </Button>
    </Box>
  );
};
