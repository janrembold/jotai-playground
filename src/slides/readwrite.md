# Jotai Read / Write atoms

This atom structure is mostly used to connect an atom with some kind of data fetching.

It can also be seen as a **lazy fetch** because the default value is **null** and you have to execute the setter of the **fetchDataAtom**

## Atom with Read-Write atom

(optionally write-only - see comment below)

```ts
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

// atom holding latest fetched data
const dataAtom = atom<null | Promise<YourApiResponseType>>(null);

// connect atom with any specific method
const fetchDataAtom = atom(
  (get) => get(dataAtom), // can also be `null` to make it write-only
  (_get, set, param) => {
    set(dataAtom, fetchSomeAsyncData(param));
  }
);
```

## Usage

```ts
// read data if it was already fetched
const data = useAtom(dataAtom);

// execute fetch data from anywhere
const fetchData = useSetAtom(fetchDataAtom);

// single line - same as above if fetchDataAtom is not write-only
const [data, fetchData] = useAtom(fetchDataAtom);
```
