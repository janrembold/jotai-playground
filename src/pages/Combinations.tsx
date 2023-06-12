import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/combinations.md?raw";
import { atom, useAtomValue, useSetAtom } from "jotai";
import { atomWithDefault } from "jotai/utils";

const timestampAtom = atom("default value");
const processedAtom = atomWithDefault((get) => get(timestampAtom));

const MyData = () => {
  const data = useAtomValue(processedAtom);
  return <p>Last data: {data}</p>;
};

const UpdateData = () => {
  const update = useSetAtom(timestampAtom);

  return (
    <button onClick={() => update(new Date().toISOString())}>Update</button>
  );
};

export const Combinations = () => {
  return (
    <Box>
      <Markdown text={md} />
      <MyData />
      <UpdateData />
    </Box>
  );
};
