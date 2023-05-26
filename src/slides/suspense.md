# React Suspense + Jotai = ❤️

Jotai has first-class support for React features like **Suspense** and **ErrorBoundary**.

Those features are built around **Promises** and outsource the handling of **loading and error states** out of the component.

## Simplified usage

```ts
// global initialization - Promise type is the important part here!
const delayedTextAtom = atom<string | Promise<string>>("");

// usage inside functional component
const [text, setDelayedText] = useAtom(delayedTextAtom);
const handleClick = () =>
  setDelayedText(
    new Promise((res) => setTimeout(() => res(Date.toString()), 4000))
  );
```
