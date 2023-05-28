import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/conclusion.md?raw";

export const Conclusion = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
