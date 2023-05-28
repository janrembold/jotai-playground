# atomWithReset

The **atomWithReset** util atom is used to RESET an atom to its initial value or to refresh a default method. This can also be done manually but in this case we don't need to remember the intial value.

To trigger a reset on atom we can use the **useResetAtom** hook.

> The **atomWithDefault** util has built-in RESET support. Writable atoms might have manual RESET, see [example here](https://jotai.org/docs/utilities/resettable#reset)

## Usage

```ts
import { useAtom } from "jotai";
import { atomWithReset, useResetAtom } from "jotai/utils";

// RESET value will be 0
const counterAtom = atomWithReset(0);

// use atom like usual and optionally create resetCount method
const [count, setCount] = useAtom(counterAtom);
const resetCount = useResetAtom(counterAtom);

// count = 0
setCount(23);
// count = 23
resetCount();
// count = 0
```
