# Vanilla Memory Game
This is a simple memory game that I made to practice some JavaScript, CSS, and HTML.
I liked to create a single page application with more views using only Vanilla JS. 
It's hard to organize your JS code after a certain point without the use of any framework but this project was small enough to pull it off easily I think.

![Menu](https://github.com/AdamGonda/memory-game/blob/master/Screenshot%202019-05-27%20at%2017.05.37.png)

The hardest part is to keep everything clean, it looks like this, with the abstraction levels all messed up:
```
1. You have to grab something from a DOM.
2. Specify the event that you like to listen to and...
3. Specify the callback function.
4. The actual function somewhere, signature and body hopefully.

1. Nothing to do with your business logic.
2. Here it is about what kind of event would you listen to.
3. It's still just kind of a label, you don't see what it does for a first glance.
4. The actual thing that you can reason about what it does exactly.
```
And repeat this all across the app every time when you like to add the other event listener and event handler pair, so it can be messy very quickly if you don't pay attention.
But it was fun :D
# [Try it out](https://adamgonda.github.io/memory-game/)
