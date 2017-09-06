# Functional Component
https://facebook.github.io/react/docs/components-and-props.html

One of the first things one learns about in the react ecosystem are functional
components. The idea behind them is simple, and much like a function (i.e take
in parameters and return a value), but it
only has one signature, which follows:

```
props => html
```

i.e we take in props and produce html. Props here can actually be more than one
thing, so really props you can think of as a bag that may contain many named
things. Also, html here is not exactly right, we actually typically return jsx,
which is a representation of html that allows us to inject javascript code.
Caveats aside, we can still think of this a function that the react framework
can call at any time to produce some html that can be rendered on a website.

Here is a functional component that does not use any props:

```
// note the name of the component is camelCased with proper casing (first letter
capitalized)
const ExampleComponent = () => {
  return <h1>Hello World</h1>
}
```

and here is one that does

```
const ExampleWProps = (props) => {
  // note the use of brackets to inject the props
  return <h1>Hello {props.something}</h1>
}
```

and here is one that takes multiple props

```
const ExampleWMultipleProps = (props) => {
  return <h1>Hello, {props.firstSomething} {props.secondSomething}</h1>
}
```

Once you make a component, you can call it within other components (assuming you
exported and imported it properly) like so:

```
// note that I can "self close" my component by putting a slash in the opening tag
<ExampleComponent />
<ExampleWProps something="World!"/>
<ExampleWMultipleProps firstSomething="a whole new" secondSomething="world"/>
```
