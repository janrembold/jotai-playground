import { Typography } from "@mui/material";
import { memo } from "react";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { ColorPalette } from "../theme";
import { Blockquote } from "./Blockquote";

interface MarkdownProps {
  text: string;
  disableCenterPullQuote?: boolean;
}

const defaultMargin = { mb: "24px" };

export const Markdown = ({ text }: MarkdownProps) => (
  <ReactMarkdown
    children={text.replaceAll("<br>", "\n")}
    components={{
      h1: memo(({ children, ...props }) => (
        <Typography
          variant="h1"
          children={children}
          sx={defaultMargin}
          {...props}
        />
      )),
      h2: memo(({ children, ...props }) => (
        <Typography
          variant="h2"
          children={children}
          sx={defaultMargin}
          {...props}
        />
      )),
      h3: memo(({ children, ...props }) => (
        <Typography
          variant="h3"
          children={children}
          sx={defaultMargin}
          {...props}
        />
      )),
      h4: memo(({ children, ...props }) => (
        <Typography
          variant="h4"
          children={children}
          sx={defaultMargin}
          {...props}
        />
      )),
      p: memo(({ children, ...props }) => (
        <Typography
          variant="body1"
          sx={{ ...defaultMargin, color: ColorPalette.black["700"] }}
          children={children}
          {...props}
        />
      )),
      pre: memo(({ children }) => <>{children}</>),
      blockquote: memo(({ children, ...props }) => (
        <Blockquote children={children} {...props} />
      )),
      code: memo(({ children }) => (
        <SyntaxHighlighter language="typescript" style={github}>
          {children as string}
        </SyntaxHighlighter>
      )),
      ul: memo(({ children }) => (
        <Typography
          children={children}
          component="ul"
          sx={{ ...defaultMargin, pl: "24px" }}
        />
      )),
      ol: memo(({ children }) => (
        <Typography
          children={children}
          component="ol"
          sx={{ ...defaultMargin, pl: "24px" }}
        />
      )),
      li: memo(({ children }) => (
        <Typography
          children={children}
          component="li"
          sx={{
            color: ColorPalette.black["700"],
            mb: "8px",
            "&::marker": {
              color: ColorPalette.black["500"],
            },
          }}
        />
      )),
    }}
  />
);
