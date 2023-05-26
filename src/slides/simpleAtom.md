# Simple Atom

The most simple version of a Jotai atom with primitive data

## Usage

```ts
import { atom, useAtom } from "jotai";

// global initialization
const counterAtom = atom<number>(0);

// usage inside functional component
const [count, setCount] = useAtom(counterAtom);
const handleClick = () => setCount(count + 1);

// follows same logic and usage as local react state
// const [count, setCount] = useState(0);
```
