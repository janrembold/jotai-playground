# FAQ

## Why atomic state management?

- It is very clear in use and easy to understand
- Rendering is based on atomic dependencies that solve extra re-render issues within React (no need for memoization)
- No need for complex reducers
- Using atomic states in your app migth enforce a more simple architecture of your APIs

## Is Jotai production ready?

- YES! Jotai is already used in many production applications
- Blazing performance due to minimal updates and atomic re-renders
- Github Repo has >13.5k stars and 4 (!!!) open issues

## How does Jotai compare to other popular state management libraries like Redux or MobX?

Jotai takes a more minimalist approach compared to Redux or MobX, offering a simpler and more lightweight solution for state management in React. It embraces atomic state updates and avoids the need for complex middleware or reducers.

## Can Jotai be used alongside existing state management solutions?

Yes, Jotai can be used alongside other state management solutions in React applications. It provides a flexible and composable architecture, allowing developers to choose the level of integration that best suits their project's needs.

## Does Jotai support server-side rendering (SSR) in React?

Yes, Jotai is compatible with server-side rendering in React. It provides the necessary tools and patterns to ensure consistent state management between the server and the client, allowing for a seamless SSR experience.

## Can Jotai be used with other UI frameworks besides React?

While Jotai is primarily designed for React, it can potentially be adapted to work with other UI frameworks. However, its core functionality and integration are optimized for React.
