## Without suspense - the old-fashioned way

```ts
const Content = () => {
  const { data, loading, error } = useSomeApiEndpoint();

  if (loading) {
    return "Loading from inside component...";
  }

  if (error || !data) {
    return "Useful error message...";
  }

  return "The content...";
};
```

## With Suspense and Jotai

```ts
import { Suspense } from "react";
// ... other imports

const SuspenseContent = () => {
  const [text, setDelayedText] = useAtom(delayedTextAtom);
  return "The content...";
};

const SuspenseComponent = () => (
  <Suspense fallback="Suspended loading....">
    <SuspenseContent />
  </Suspense>
);
```