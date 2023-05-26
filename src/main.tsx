import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme.ts";
import { createRouter, defineRoute } from "type-route";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export const { RouteProvider, useRoute, routes } = createRouter({
  home: defineRoute("/"),
  intro: defineRoute("/introduction"),
  simpleAtom: defineRoute("/simple-atom"),
  suspense: defineRoute("/suspense"),
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <RouteProvider>
      <CssBaseline />
      <App />
    </RouteProvider>
  </ThemeProvider>
);
