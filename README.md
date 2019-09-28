# React vs. Preact vs. Vue Todo List

This is a simple experiment designed to showcase the differences in code complexity, bundle size, and performance between React, Preact, and Vue to help you decide the foundation for your next web-app.

The demo is currently incomplete but as of the time being...

## Bundle size for Hello World (not gzipped):

1. Preact (tiny - just over 8kB)
2. Vue (about 64kB)
3. React (about 125 kB)

## Bundle size for Todo List (not gzipped):
1. Preact (15 kB)
2. Vue (probably - not yet tested)
3. React (131 kB)

As your codebase increases in size and you add external modules, these three numbers will get much closer together and order may even change. Preact will probably always beat React though. If you need to port pre-existing React to Preact, use `preact/compat`

## Performance, according to preliminary tests of these example apps and the TodoMVC benchmark, something like:

1. Preact
2. Vue (close to Preact)
3. React (behind)

Keep in mind that bundle size is way more important for time to interactive (script execution is nearly negligible in comparison to download time), so raw performance isn't that big of a deal.

## Learning curve (subjective):

1. Vue (well-written tutorial and simple structure - familiar for those who have never used a UI framework or library or have only used Angular)
2. Preact and React (a bit more time and experience needed)

Preact and React have virtually identical APIs, but there are some differences, e.g. `className` for React vs `class` for Preact, and a synthetic event system for React vs DOM-based for Preact. If `preact/compat` doesn't work, you still shouldn't have a hard time porting a React codebase.

## Other considerations

Preact is always going to have to play catch-up with the official React library, so the latest and greatest features won't arrive immediately.

Vue is getting really popular, but there are more React job opportunities.

## Conclusions

If you've never learned about state and/or are just starting to use JavaScript-based UI, try Vue. It has sufficient performance but is not too hard to understand. 

In my opinion, however, Preact is the best choice simply because I feel that Vue's suggested template syntax, which uses `v-` directives, is not as clean or powerful as React's JSX. Also, I don't need the program recursively watching the state object. Moreover, React can be easily replaced with Preact for much better TTI.