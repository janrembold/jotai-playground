# atomFamily

> The **atomFamily** util atom is internally more or less just a simple JavaScript **Map**. A given key always returns its value. This is particularly helpful when you need to load clearly identifiable datasets.

In the following example you can see that different atoms can be nicely combined. In this case **atomWithDefault** is used to immediately invoke the fetch call for a specific product.

## Usage

```ts
import { useAtom } from "jotai";
import { atomFamily, atomWithDefault } from "jotai/utils";

// immediately call `fetchProduct` for given product ID or return existing from cache
const productAtom = atomFamily((productId) =>
  atomWithDefault(() => fetchProduct(productId))
);

// use atom like usual but with a specific ID
const [product, fetchProductById] = useAtom(productAtom("id-123-45"));
```
