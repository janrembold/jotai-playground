# Jotai Vanilla usage

Since **Jotai v2** it is also possible to use the store outside React components.

## Usage

```ts
import { createStore } from "jotai";

const store = createStore();

// use this in your vanilla code outside React components
// e.g. Auth libraries or Firebase integrations
store.set(fooAtom, "foo");

console.log(store.get(fooAtom)); // prints "foo"

const unsub = store.sub(fooAtom, () => {
  console.log("fooAtom value in store is changed");
});
// call unsub() to unsubscribe.
```
