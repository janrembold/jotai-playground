import { Box } from "@mui/material";
import { Markdown } from "../components/Markdown";
import md from "../slides/provider.md?raw";
import { Provider, createStore } from "jotai";
import { Counter } from "../components/Counter";

const myStore1 = createStore();
const myStore2 = createStore();

export const ProviderStore = () => {
  return (
    <Box>
      <Markdown text={md} />

      <Box sx={{ display: "flex", mt: -2 }}>
        <Box sx={{ mr: 2, mt: 2 }}>
          <Provider store={myStore1}>
            <Counter title="Provider 1" />
          </Provider>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Provider store={myStore2}>
            <Counter title="Provider 2" />
          </Provider>
        </Box>
      </Box>
    </Box>
  );
};
