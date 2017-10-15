# Lodash

The core of javascript (methods available on primitives and collections), was
limited when underscore (loadash is a fork of underscore) came out in 2009. For
example Array.prototype.map wasn't available until ES5.1 (June 2011). Seriously
this meant people would have to implement their own for loop to do basic things
liks mapping. 

Lodash is a "utility" library, which is a word we usually use for methods that
are not specific to one thing (i.e specific to your domain/business logic), and are "generally" useful. It really is quite
the library, and it will totally change the way you write js. It does this by
providing new (and existing) methods for collections and primitives. It also,
(in most cases) will not mutate the thing you are operating on, and will return
new values for you. It also supports chaining. 

## The lodash docs

[docs](https://lodash.com/docs/4.17.4)

On the left side we get a few different sections:

* Array
* Collection
* Date
* Function
* Lang
* Math
* Number
* Object
* Seq
* String
* Util
* Properties
* Methods

Ok so there are a few things there, of our primitives we see sections for
Number/Math, and String (no boolean methods, pretty basic type, javascript
provides what we need for booleans, but there are some things in lang that are
useful for bools), and then we also see Array and Object represented.

The collections section covers methods that are useful for both objects and
arrays.

Ok so, what about these other sections:
* Function: functions are values too! We can have methods that operate on
  functions!
* Lang: gives us a bunch of functions for inspecting language constructs
* Seq: gives us our chaining methods
* Util: util in a util library! One notable method is flow, which is similar to
  chaining
* We can ignore the others (properties, methods)

### Examples

* [capitalize](https://lodash.com/docs/4.17.4#capitalize)
* [reduce](https://lodash.com/docs/4.17.4#reduce)
* [group by](https://lodash.com/docs/4.17.4#groupBy)
* [union](https://lodash.com/docs/4.17.4#union)
* [get](https://lodash.com/docs/4.17.4#get)
* [curry](https://lodash.com/docs/4.17.4#curry)
* [lodash main method (for chaining)](https://lodash.com/docs/4.17.4#lodash)
