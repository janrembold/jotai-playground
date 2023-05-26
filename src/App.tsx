import { Box, Link, Typography } from "@mui/material";
import { ColorPalette } from "./theme";
import { routes, useRoute } from "./main";
import { Introduction } from "./pages/Introduction";
import { SimpleAtom } from "./pages/SimpleAtom";
import { Home } from "./pages/Home";
import { SuspenseComponent } from "./pages/Suspense";
import { GetSet } from "./pages/GetSet";
import { ReadWriteAtom } from "./pages/ReadWriteAtom";
import { AtomWithDefault } from "./pages/AtomWithDefault";

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
            <NavLink {...routes.intro().link}>Intro</NavLink>
            <NavLink {...routes.simpleAtom().link}>Simple Atom</NavLink>
            <NavLink {...routes.suspense().link}>Suspense</NavLink>
            <NavLink {...routes.getset().link}>Getter / Setter</NavLink>
            <NavLink {...routes.readwrite().link}>Read / Write Atom</NavLink>
            <Box sx={{ mt: 1 }}>
              <Typography>Utils</Typography>
            </Box>
            <NavLink {...routes.atomWithDefault().link}>
              atomWithDefault
            </NavLink>
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
        {route.name === "atomWithDefault" && <AtomWithDefault />}
      </Box>
    </Box>
  );
};
