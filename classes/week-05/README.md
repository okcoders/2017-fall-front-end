# Week 5

## reading:
* [styled components](https://www.styled-components.com/)
* [axios](https://github.com/axios/axios)
* [passing state up](https://reactjs.org/tutorial/tutorial.html#lifting-state-up)
* [redux](http://redux.js.org/)

### Redux

So, in react we can have class based components that have state. This is all
fine and good when we are dealing with basic applications. As we start to get
more advanced we find the need for some overarching parent that holds the state we
need throughout the entire life of our application. We can do this with a
parent component in react, and everything is fine, but once things get real advanced
we start needing the ability to see what actions made our state the way it is
at certain points in time. In comes redux


#### Redux primitives

* store: holds all our data
* action: codifies something that happens
* reducer: updates the store based on an action



