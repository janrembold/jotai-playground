# atomWithDefault

Sometimes it is useful to call the desired method directly without having to make an additional fetch call.

For this case there is the **atomWithDefault** util function

## Usage

```ts
import { useAtomValue } from "jotai";
import { atomWithDefault } from "jotai/utils";

// immediately call `fetchSomeAsyncData` -> always leads to a Promise response
const dataAtom = atomWithDefault(() => fetchSomeAsyncData());

// use atom value only and immediately call the default function
const data = useAtomValue(dataAtom);
```
