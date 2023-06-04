import { Box, Link, Typography } from "@mui/material";
import { ColorPalette } from "./theme";
import { routes, useRoute } from "./main";
import { SimpleAtom } from "./pages/SimpleAtom";
import { Home } from "./pages/Home";
import { SuspenseComponent } from "./pages/Suspense";
import { GetSet } from "./pages/GetSet";
import { ReadWriteAtom } from "./pages/ReadWriteAtom";
import { AtomWithDefault } from "./pages/AtomWithDefault";
import { AtomFamily } from "./pages/AtomFamily";
import { ProviderStore } from "./pages/ProviderStore";
import { Vanilla } from "./pages/Vanilla";
import { AtomWithReset } from "./pages/AtomWithReset";
import { DevToolsPage } from "./pages/DevToolsPage";
import { Conclusion } from "./pages/Conclusion";
import { Faq } from "./pages/Faq";
import { Comparison } from "./pages/Comparison";
import { Route } from "type-route";
import { ReactNode } from "react";

const NavLink = ({
  to,
  children,
}: {
  to: Route<typeof routes>;
  children: ReactNode;
}) => {
  const route = useRoute();
  const isActive = route.name === to.name;

  return (
    <Link
      {...to.link}
      sx={{ display: "block", py: "5px" }}
      underline={isActive ? "always" : "hover"}
    >
      {children}
    </Link>
  );
};

export const App = () => {
  const route = useRoute();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "15%",
          maxWidth: "300px",
          minWidth: "220px",
          borderRight: `1px solid ${ColorPalette.grey.lighter40}`,
        }}
      >
        <Box sx={{ position: "sticky", top: 0, p: "30px" }}>
          <Link {...routes.home().link}>
            <img src="jotai.svg" alt="" />
          </Link>

          <Box sx={{ mt: "30px" }}>
            <NavLink to={routes.comparison()}>Comparison</NavLink>
            <NavLink to={routes.simpleAtom()}>Simple Atom</NavLink>
            <NavLink to={routes.suspense()}>Suspense</NavLink>
            <NavLink to={routes.getset()}>Getter / Setter</NavLink>
            <NavLink to={routes.readwrite()}>Read / Write Atom</NavLink>
            <NavLink to={routes.provider()}>Provider / Store</NavLink>
            <NavLink to={routes.vanilla()}>Vanilla</NavLink>
            <Box sx={{ mt: "12px" }}>
              <Typography>Utils</Typography>
            </Box>
            <NavLink to={routes.atomWithDefault()}>atomWithDefault</NavLink>
            <NavLink to={routes.atomFamily()}>atomFamily</NavLink>
            <Box sx={{ mt: "12px" }}>
              <NavLink to={routes.devTools()}>DevTools</NavLink>
              <NavLink to={routes.faq()}>FAQ</NavLink>
              <NavLink to={routes.conclusion()}>Conclusion</NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, p: "34px 30px 30px" }}>
        {route.name === routes.home().name && <Home />}
        {route.name === routes.comparison().name && <Comparison />}
        {route.name === "simpleAtom" && <SimpleAtom />}
        {route.name === "suspense" && <SuspenseComponent />}
        {route.name === "getset" && <GetSet />}
        {route.name === "readwrite" && <ReadWriteAtom />}
        {route.name === "provider" && <ProviderStore />}
        {route.name === "vanilla" && <Vanilla />}
        {route.name === "atomWithDefault" && <AtomWithDefault />}
        {route.name === "atomFamily" && <AtomFamily />}
        {route.name === "atomWithReset" && <AtomWithReset />}
        {route.name === "devTools" && <DevToolsPage />}
        {route.name === "faq" && <Faq />}
        {route.name === "conclusion" && <Conclusion />}
      </Box>
    </Box>
  );
};
