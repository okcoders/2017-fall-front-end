## es6 or ecmascript2015

### let and const

With const we can only have one of the same name per scope, and we can't assign
a new value to it (though if we assign a collection, we can modify the
collection still).

With let we can only have one of the same name per block, but, we can still
reasign in a given block.


```
$ node
> let testLet = 1
undefined
> const testConst = 2
undefined
> testLet = 2
2
> testConst = 3
TypeError: Assignment to constant variable.
    at repl:1:11
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
    at REPLServer.Interface._onLine (readline.js:279:10)
    at REPLServer.Interface._line (readline.js:626:8)
> { testLet = 3 }
3
> testLet
3
> { let testLet = 4; testLet = 5 }
5
> testLet
3
> function foo() { const testConst = 5 }
undefined
> foo()
undefined
> testConst
2
> function bar() { testConst = 5 }
undefined
> bar()
TypeError: Assignment to constant variable.
    at bar (repl:1:28)
    at repl:1:1
    at ContextifyScript.Script.runInThisContext (vm.js:44:33)
    at REPLServer.defaultEval (repl.js:239:29)
    at bound (domain.js:301:14)
    at REPLServer.runBound [as eval] (domain.js:314:12)
    at REPLServer.onLine (repl.js:440:10)
    at emitOne (events.js:120:20)
    at REPLServer.emit (events.js:210:7)
    at REPLServer.Interface._onLine (readline.js:279:10)
> function baz() { testLet = 8 }
undefined
> baz()
undefined
> testLet
8
```

### template strings

### default parameters

### ternary operator

### spread operator

### destructuring

### classes
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

```
class Loggable {
  constructor(statement) {
    this.statement = statement
  }

  log() {
    console.log(this.statement)
  }
}

class Einstein extends Loggable {
  constructor(statement, theory) {
    super(statement)
    this.theory = theory
  }

  static youngEinstein() {
    return new Einstein("I can handle constant velocity", "special relativity")
  }
}
```

### rocket (arrow) functions

### sets

### import and export statements
