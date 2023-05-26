import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/getset.md?raw";

export const GetSet = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
