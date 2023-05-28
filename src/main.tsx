import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { createRouter, defineRoute } from "type-route";
import { DevTools } from "jotai-devtools";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),
  intro: defineRoute("/introduction"),
  simpleAtom: defineRoute("/simple-atom"),
  suspense: defineRoute("/suspense"),
  getset: defineRoute("/getter-setter"),
  readwrite: defineRoute("/read-write-atom"),
  provider: defineRoute("/provider-store"),
  vanilla: defineRoute("/vanilla"),
  atomWithDefault: defineRoute("/atom-with-default"),
  atomFamily: defineRoute("/atom-family"),
  atomWithReset: defineRoute("/atom-with-reset"),
  devTools: defineRoute("/devtools"),
  faq: defineRoute("/faq"),
  conclusion: defineRoute("/conclusion"),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouteProvider>
      <CssBaseline />
      <DevTools />
      <App />
    </RouteProvider>
  </ThemeProvider>
);
