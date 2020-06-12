# Important notes

- All React components must act like pure functions with respect to their props.
- Functions are regular objects with the additional capability of being callable.
- If you have a _Component_ how many diffs are there? If you have a _PureComponent_ how many diffs are there? The answers are “just one” and “at least one and sometimes two”, respectively. If a component usually changes when there’s an update, then a _PureComponent_ will be doing two diffs instead of just one (props and state in _shouldComponentUpdate_, and then the normal element diff). Which means it’s going to be slower usually but faster occasionally.
- This [article](https://spin.atomicobject.com/2018/04/02/redux-rerendering/) about Re-rendering caused by `mapDispatchToProps` of `react-redux` library is very usefull.
- A higher-order component is a function that takes a component and returns a new component.

## Before You Use Context

- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

## Error boundaries

- Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.
- Use static _getDerivedStateFromError()_ to render a fallback UI after an error has been thrown. Use _componentDidCatch()_ to log error information.
- Adding error boundaries lets you provide better user experience when something goes wrong.

```
static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  return { hasError: true };
}

componentDidCatch(error, errorInfo) {
  // You can also log the error to an error reporting service
  logErrorToMyService(error, errorInfo);
}
```

## Hooks

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

### Effect Hook

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.

When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.

### Rules of Hooks

Hooks are JavaScript functions, but they impose two additional rules:

- Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks).

### Custom hooks

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The `useSomething` naming convention is how our linter plugin is able to find bugs in the code using Hooks.
