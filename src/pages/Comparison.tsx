import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";

const CenterCell = ({ children }: { children: ReactNode }) => (
  <TableCell align="center">{children}</TableCell>
);

export const Comparison = () => (
  <Box>
    <Typography variant="h1" gutterBottom>
      Comparison of (some) libraries
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <CenterCell>Jotai</CenterCell>
            <CenterCell>Effector</CenterCell>
            <CenterCell>Redux</CenterCell>
            <CenterCell>MobX</CenterCell>
            <CenterCell>Recoil</CenterCell>
            <CenterCell>Valtio</CenterCell>
            <CenterCell>Zustand</CenterCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              React Support
            </TableCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Vanilla Support
            </TableCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>?</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>❌</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Suspense Support
            </TableCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>❌</CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>❌</CenterCell>
            <CenterCell>❌</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>❌</CenterCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              TypeScript
            </TableCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>
              ⚠️ <sup>2</sup>
            </CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Functional support
            </TableCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>
              ⚠️ <sup>1</sup>
            </CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
            <CenterCell>✅</CenterCell>
          </TableRow>

          <TableRow>
            <TableCell component="th" scope="row">
              Store Composition
            </TableCell>
            <CenterCell>Atomic</CenterCell>
            <CenterCell>Atomic</CenterCell>
            <CenterCell>Single</CenterCell>
            <CenterCell>Single (by domain)</CenterCell>
            <CenterCell>Atomic</CenterCell>
            <CenterCell>
              Single (Proxy)<sup>4</sup>
            </CenterCell>
            <CenterCell>
              Single (Proxy)<sup>4</sup>
            </CenterCell>
          </TableRow>

          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              Bundle size <sup>3</sup>
            </TableCell>
            <CenterCell>6.9 kB</CenterCell>
            <CenterCell>
              36.4 kB
              <br />
              (incl. react bindings)
            </CenterCell>
            <CenterCell>
              58.2 kB <br />
              (incl. toolkit)
            </CenterCell>
            <CenterCell>
              74.8 kB <br />
              (incl. react bindings)
            </CenterCell>
            <CenterCell>79.4 kB</CenterCell>
            <CenterCell>8.1 kB</CenterCell>
            <CenterCell>3 kB</CenterCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

    <Box sx={{ mt: 2 }}>
      <Typography variant="caption" component="div">
        <sup>1</sup> with additional plugin(s)
      </Typography>
      <Typography variant="caption" component="div">
        <sup>2</sup> use spec compliant transpilation for class properties:{" "}
        <a
          href="https://mobx.js.org/installation.html#use-spec-compliant-transpilation-for-class-properties"
          target="_blank"
        >
          https://mobx.js.org/installation.html#use-spec-compliant-transpilation-for-class-properties
        </a>
      </Typography>
      <Typography variant="caption" component="div">
        <sup>3</sup> minified (as of 2023-06-04 by bundlephobia.com)
      </Typography>
      <Typography variant="caption" component="div">
        <sup>4</sup> a proxy is a wrapper object that is being called by the
        client to access the real serving object behind the scenes
      </Typography>
    </Box>
  </Box>
);
