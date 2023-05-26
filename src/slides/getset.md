# Jotai Getter / Setter

To make your life a bit easier there are 3 ways of setting and getting atomic data from Jotai

## Usage

```ts
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

// global initialization
const counterAtom = atom(0);

// use atom value only
const count = useAtomValue(counterAtom);

// use only setter function
const setCount = useSetAtom(counterAtom);

// use both, getter and setter functions
const [count, setCount] = useAtom(counterAtom);
```
