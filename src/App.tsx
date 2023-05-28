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

const NavLink = ({ ...rest }) => (
  <Link sx={{ display: "block", py: "5px" }} {...rest} />
);

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
            <NavLink {...routes.simpleAtom().link}>Simple Atom</NavLink>
            <NavLink {...routes.suspense().link}>Suspense</NavLink>
            <NavLink {...routes.getset().link}>Getter / Setter</NavLink>
            <NavLink {...routes.readwrite().link}>Read / Write Atom</NavLink>
            <NavLink {...routes.provider().link}>Provider / Store</NavLink>
            <NavLink {...routes.vanilla().link}>Vanilla</NavLink>
            <Box sx={{ mt: "12px" }}>
              <Typography>Utils</Typography>
            </Box>
            <NavLink {...routes.atomWithDefault().link}>
              atomWithDefault
            </NavLink>
            <NavLink {...routes.atomFamily().link}>atomFamily</NavLink>
            <Box sx={{ mt: "12px" }}>
              <NavLink {...routes.devTools().link}>DevTools</NavLink>
              <NavLink {...routes.faq().link}>FAQ</NavLink>
              <NavLink {...routes.conclusion().link}>Conclusion</NavLink>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, p: "34px 30px 30px" }}>
        {route.name === "home" && <Home />}
        {route.name === "intro" && <Introduction />}
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
