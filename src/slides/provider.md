# Jotai Provider and Store

The Jotai **Provider** works just like a normal **React Context**. It can be wrapped around subtrees or even be nested to seperate stores inside the React DOM tree.

The **Provider** is **optional** and not necessary if you just want to handle a single global store in your application.

By default Jotai creates a single default store that is used globally. But you can also create as many custom stores as you want with the **createStore** method and add this store to your provider(s).

## Usage

```ts
import { Provider } from "jotai";

// create custom Jotai stores
const myStore1 = createStore();
const myStore2 = createStore();

// exmaple below encapsulates the `Counter` component into two different stores
<Provider store={myStore1}>
  <Counter />
</Provider>

<Provider store={myStore2}>
  <Counter />
</Provider>
```
