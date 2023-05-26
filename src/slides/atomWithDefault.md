# atomWithDefault

Sometimes it is useful to call the desired method directly without having to make an additional fetch call.

For this case there is the **atomWithDefault** util function

## Usage

```ts
import { atomWithDefault, useAtom } from "jotai";

// example with item count param that is stored in a separate atom
const itemCountAtom = atom(5);

// immediately call `fetchSomeAsyncData`
// this always leads to a Promise
const dataAtom = atomWithDefault((get) =>
  fetchSomeAsyncData(get(itemCountAtom))
);

// use atom value only and immediately call the default function
const count = useAtomValue(counterAtom);

// fetch 10 items
const setCount = useSetAtom(itemCountAtom);
setCount(10);
```
