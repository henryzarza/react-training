# Important notes

- All React components must act like pure functions with respect to their props.
- Functions are regular objects with the additional capability of being callable.
- If you have a _Component_ how many diffs are there? If you have a _PureComponent_ how many diffs are there? The answers are “just one” and “at least one and sometimes two”, respectively. If a component usually changes when there’s an update, then a _PureComponent_ will be doing two diffs instead of just one (props and state in _shouldComponentUpdate_, and then the normal element diff). Which means it’s going to be slower usually but faster occasionally.
- This [article](https://spin.atomicobject.com/2018/04/02/redux-rerendering/) about Re-rendering caused by `mapDispatchToProps` of `react-redux` library is very usefull.
- A higher-order component is a function that takes a component and returns a new component.
- Forgetting to handle `componentDidUpdate` properly is a common source of bugs in React applications.
- `Props Default to “True”`: If you pass no value for a prop, it defaults to true. These two JSX expressions are equivalent:

```
<MyTextBox autocomplete />

<MyTextBox autocomplete={true} />
```

In general, we don’t recommend not passing a value for a prop, because it can be confused with the ES6 object shorthand `{foo}` which is short for `{foo: foo}` rather than `{foo: true}`. This behavior is just there so that it matches the behavior of HTML.

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

Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.
`Don’t call Hooks inside loops, conditions, or nested functions.` Instead, always use Hooks at the top level of your React function. By following this rule, you ensure that Hooks are called in the same order each time a component renders.

The function passed to `useMemo` runs during rendering. Don’t do anything there that you wouldn’t normally do while rendering. For example, side effects belong in `useEffect`, not `useMemo`.

Keep in mind that `useRef` doesn’t notify you when its content changes. Mutating the `.current` property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use `a callback ref` instead.

### Effect Hook

You’ve likely performed data fetching, subscriptions, or manually changing the DOM from React components before. We call these operations “side effects” (or “effects” for short) because they can affect other components and can’t be done during rendering.
The Effect Hook, `useEffect`, adds the ability to perform side effects from a function component. It serves the same purpose as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in React classes, but unified into a single API.
`Effect` cleanup avoids duplication in `componentDidUpdate` and `componentWillUnmount`, brings related code closer together, and helps us avoid bugs.

When you call `useEffect`, you’re telling React to run your “effect” function after flushing changes to the DOM. Effects are declared inside the component so they have access to its props and state. By default, React runs the effects after every render — including the first render.

### State Hook

React guarantees that `setState` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the `useEffect` or `useCallback` dependency list.

```
function Counter({initialCount}) {
  const [count, setCount] = useState(initialCount);
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </>
  );
}
```

The initialState argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

```
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props);
  return initialState;
});
```

### Context Hook

Don’t forget that the argument to useContext must be the context object itself:

- Correct: `useContext(MyContext)`
- Incorrect: `useContext(MyContext.Consumer)`
- Incorrect: `useContext(MyContext.Provider)`

A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using **memoization**.

### Rules of Hooks

Hooks are JavaScript functions, but they impose two additional rules:

- Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks).

So how does React know which state corresponds to which useState call? The answer is that **React relies on the order in which Hooks are called**.

### Custom hooks

Custom Hooks are more of a convention than a feature. If a function’s name starts with ”use” and it calls other Hooks, we say it is a custom Hook. The `useSomething` naming convention is how our linter plugin is able to find bugs in the code using Hooks.

**Do I have to name my custom Hooks starting with “use”?** Please do. This convention is very important. Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.

### Hooks API Reference

- Basic Hooks

  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

- Additional Hooks

  - [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)
  - [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
  - [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle)
  - [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#uselayouteffect)
  - [useDebugValue](https://reactjs.org/docs/hooks-reference.html#usedebugvalue)

### useReducer

`useReducer` is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.

React guarantees that `dispatch` function identity is stable and won’t change on re-renders. This is why it’s safe to omit from the useEffect or useCallback dependency list.

## Profiler

A `Profiler` can be added anywhere in a React tree to measure the cost of rendering that part of the tree. It requires two props: an id (string) and an onRender callback (function) which React calls any time a component within the tree “commits” an update.

```
render(
  <App>
    <Profiler id="Navigation" onRender={callback}>
      <Navigation {...props} />
    </Profiler>
    <Profiler id="Main" onRender={callback}>
      <Main {...props} />
    </Profiler>
  </App>
);
```

_Although Profiler is a light-weight component, it should be used only when necessary; each use adds some CPU and memory overhead to an application._

- The `Profiler` requires an onRender function as a prop. React calls this function any time a component within the profiled tree “commits” an update. It receives parameters describing what was rendered and how long it took.

```
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```
