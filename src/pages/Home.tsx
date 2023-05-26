import { Box } from "@mui/material";
import home from "../slides/home.md?raw";
import { Markdown } from "../components/Markdown";

export const Home = () => {
  return (
    <Box>
      <Markdown text={home} />
      <Box sx={{ maxWidth: "400px" }}>
        <img
          src="/qr-code.png"
          alt="QR Code to https://github.com/janrembold/jotai-playground"
        />
      </Box>
    </Box>
  );
};
