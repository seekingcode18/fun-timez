# FunTimez
This is a React app that aims to teach children multiplication up to the 12 times tables by highlighting multiples of a selected number.

To run this app, clone the repo and run `npm start` in the root directory; if a browser window is not automatically opened, navigate to `localhost:3000`.

## Methodology
I decided to start my own repo from scratch and use create-react-app to speed up the initial setup process of integrating React into the project. This was a fun project to build because, while simple, it covers important features of React, e.g. state management, components, and (shadow) DOM manipulation.

## Challenges
Working out the logic for how to highlight the multiples was definitely the biggest challenge. I succeeded after repeated attempts of trial and error, using React dev tools to help me assess which part of the state or props wasn't yet working as intended.

## Technologies
- React (inc. ES6 JavaScript & create-react-app)
- HTML5
- CSS3
- Jest

## Next Steps
If I had more time, I would like to explore these features:
- use semantic table elements for the grid of numbers - I tried this but overriding the default behaviour and styling of the table elements was difficult and took too long to get to an acceptable result
- conduct manual testing with a touch screen device and a screen reader simulator
- experiment with styled components to avoid keeping all the styles in a global stylesheet
- add the ability for the grid to be customised (e.g. if a teacher only wants the numbers 1 to 20 to be visible)
- add test/s for multiples (e.g. correct numbers are highlighted when a given number is selected)
