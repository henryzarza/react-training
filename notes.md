# Important notes

- All React components must act like pure functions with respect to their props.
- Functions are regular objects with the additional capability of being callable.
- If you have a _Component_ how many diffs are there? If you have a _PureComponent_ how many diffs are there? The answers are “just one” and “at least one and sometimes two”, respectively. If a component usually changes when there’s an update, then a _PureComponent_ will be doing two diffs instead of just one (props and state in _shouldComponentUpdate_, and then the normal element diff). Which means it’s going to be slower usually but faster occasionally.
- This [article](https://spin.atomicobject.com/2018/04/02/redux-rerendering/) about Re-rendering caused by `mapDispatchToProps` of `react-redux` library is very usefull.

### Before You Use Context

- Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.

### Error boundaries

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
