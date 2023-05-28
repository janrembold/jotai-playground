# DevTools

> While writing this text the Jotai DevTools are still on early **alpha** level

The installation is quite simple. You only need to add a simple component on the root level of your app.

- This component is optimized for **tree-shaking**
- Only available in **development mode**

## Usage

```ts
import { DevTools } from "jotai-devtools";

const App = () => {
  return (
    <>
      <DevTools />
      {/* your app */}
    </>
  );
};
```

## With custom store and Provider

```ts
import { createStore } from "jotai";
import { DevTools } from "jotai-devtools";

const customStore = createStore();

const App = () => {
  return (
    <Provider store={customStore}>
      <DevTools store={customStore} />
      {/* your app */}
    </Provider>
  );
};
```

👈 Now we should see a jotai icon on the bottem left
