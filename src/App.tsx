import { Box, Link } from "@mui/material";
import { ColorPalette } from "./theme";
import { routes, useRoute } from "./main";
import { Introduction } from "./pages/Introduction";
import { SimpleAtom } from "./pages/SimpleAtom";
import { Home } from "./pages/Home";

const NavLink = ({ ...rest }) => (
  <Link sx={{ display: "block", py: "5px" }} {...rest} />
);

export const App = () => {
  const route = useRoute();

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Box
        sx={{
          height: "100vh",
          width: "15%",
          maxWidth: "300px",
          minWidth: "220px",
          borderRight: `1px solid ${ColorPalette.grey.lighter40}`,
        }}
      >
        <Box sx={{ p: "30px" }}>
          <Link {...routes.home().link}>
            <img src="jotai.svg" alt="" />
          </Link>

          <Box sx={{ mt: "30px" }}>
            <NavLink {...routes.intro().link}>Intro</NavLink>
            <NavLink {...routes.simpleAtom().link}>Simple Atom</NavLink>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1, p: "34px 30px 30px" }}>
        {route.name === "home" && <Home />}
        {route.name === "intro" && <Introduction />}
        {route.name === "simpleAtom" && <SimpleAtom />}
      </Box>
    </Box>
  );
};
