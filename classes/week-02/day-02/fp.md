# Functional Programming
[mostly adequate](https://github.com/MostlyAdequate/mostly-adequate-guide)

* immutable data structures
* const
* pure functions
* higher order functions
* recursive functions
* currying
* when you have many small pieces you can rearange them more. i.e if I have a
  program with one giant function, I have 1 program, and if I have a program
  with 4 functions I have up to n! programs (assuming I want to call all four
  functions and that all are composable, i.e input and output
  types of the functions are the same)

  a(b(c(d())))
  b(c(a(d())))
  etc...

  Without pure functions it becomes very hard to compose the above together
