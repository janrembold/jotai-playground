# Jotai Getter / Setter

To make your life a bit easier there are 3 ways of setting and getting atomic data from Jotai

### Create any kind of atom

```ts
import { atom } from "jotai";

const counterAtom = atom(0);
```

### Only use the atom value

```ts
const count = useAtomValue(counterAtom);
```

### Set the atom value

```ts
const setCount = useSetAtom(counterAtom);
```

### Use getter and setter - same as React useState

```ts
const [count, setCount] = useAtom(counterAtom);
```
