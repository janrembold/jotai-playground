import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/faq.md?raw";

export const Faq = () => {
  return (
    <Box>
      <Markdown text={md} />
    </Box>
  );
};
