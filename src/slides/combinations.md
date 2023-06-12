# Combining reactive atoms

First atom contains a static value, can be anything from search phrase or pagination value...

It is connected to the **processedAtom** and any change is immediately processed.

```ts
const simpleAtom = atom("default value");
// usually this atom does some business logic, like fetching async data
const processedAtom = atomWithDefault((get) => get(timestampAtom));

const UpdateData = () => {
  const update = useSetAtom(simpleAtom);

  return (
    <button onClick={() => update(new Date().toISOString())}>Update</button>
  );
};

const MyData = () => {
  const data = useAtomValue(processedAtom);
  return <p>Last data: {data}</p>;
};
```
