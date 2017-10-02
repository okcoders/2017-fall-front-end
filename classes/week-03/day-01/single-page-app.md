# The Single Page App

## Before SPA libraries

In the very beginning all we had were different html pages tied to certain
urls.

A user goes to /home and the home.html page is rendered by the server, go to
/info, and info.html is returned by the server. The aformentioned
pages were nothing more than just html content, and maybe a few links to other
pages that existed on the server.

### Dynamic Server Content

When we started to desire pages that looked different depending on the
person looking at it, we would start to store things in databases and
inject the values into the html page. So /info might now call a template that
takes in values, and then returns html with those values injected.

### Javascript

Then javascript came along and when someone goes to /home home.html is sent
back but it also might have some javascript included that changes the
content on the page in response to some user input. It would typically not
change the url in response to this.

### Ajax

Then ajax comes along, and instead of the Dynamic Server Content, we might
from the client, request information from the database, and then render/inject
that into the page from the client.

Being able to do ajax is what really kicked this whole thing off.

People started doing more and more complicated things from the client side
with ajax and then soon popular libraries like jquery. We could do more and
more things from the client, and we soon wanted to be able to do everything we
could do from the server. 

## SPA requirements

* ajax
* url handling/routing
* templating and looping constructs
* user event control/callbacks
* models and state management

## React

What is interesting is that react does not provide all these things, whereas
projects like angular do.

### Why is react so popular?

probably because of how simple it is (the api is very small)
