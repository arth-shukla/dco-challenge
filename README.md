# Environment Info

## Technologies Used

React, Typescript, SCSS

# Developer Notes

## Window Height

As explained in the comments at line 6 in `src/App.tsx`, I used js to read the window height instead of `100vh` in css. The reason is that `vh` has poor compatibility with mobile/tablet browsers (e.g. iOS Safari) since they sometimes have navigation, search bars, etc laid over the viewport (though the viewport is considered the same size by css). However, `window.innerHeight` shows the directly available window space.

This can come with other issues, e.g. with mobile browsers that have other built-in animations that change the `window.innerHeight` value, but generally these issues are less common.

## `AutoResize` Component vs Bootstrap

While the `AutoResize` component could be acheived using React Bootstrap's own `Row` and `Col` components, I figured that's sort of cheating, so I made the AutoResize component instead.

It works about the same as Bootstrap's implementation, though it's slightly less user-friendly since it uses variables from `_variables.scss`. This can be easily fixed by hardcoding the `xs`, `sm`, etc values, but I chose not to here for the sake of consistency.
