# Sparrow

*A Passer is a genus of sparrows, also known as the true sparrows.*

## Current state of the app

Todo:

* fix the development branch issues with useContext
* isolate the velocity and color range variations into a separate function and unit test
* add labels for the slider and short description

Initially I created a toy app to experiment with using a slider representing the velocity to change the color or an svg circle representing a star.  This version is the current code in the master branch.

This was fun and teased out some questions I would have for the product owner such as, what is the color of the star with velocity 0?  How does the exponential negative range affect the color?  I used the opacity variable to implement the exponential change on negative velocities, but this would have to be discussed with the product owner as a valid approach.

Architecturally, the first implementation returns the fill value and a set of props spread onto the slider input.  This would have been fine after re-organizing the app and using prop drilling to coordinate the action.

The next task was to organize the app into a more mature set of files that split the different concerns out where they could be tested in isolation.  This starts with a feature directory.

I wanted to get some experience with the ```useContext``` hook which  I haven't really used before much except for learning about it in the docs and various tutorials.  Building my own app that uses this hook was a bit more difficult.

It's straight forward how to use the state and then update it from a template.   It was also easy to create a context provider that let any component in the tree access the values.  But doing so programmatically was a lot more trial and error.   Add to this using TypeScript, and I've given myself a lot more work to do than just the goal of creating the feature.

As of now, I have the useContext work in progress in the ```development``` branch.  I will continue to solve the issues with this branch and given some more time, merge a decent solution when its ready.

 I should be able to do this:

```html
let { state, dispatch } = React.useContext(StarContext);
```

And use the star context like this:

```html
<StarContext.Provider value={value}>{props.children}</StarContext.Provider>
```

But there is a TypeScript error here:

```txt
Property 'state' does not exist on type '{ fill: string; velocity: number; }'
```

So there is a disconnect between the way the context is being created and used.

Next steps are to fix this, and then replace the props used for the initial approach with dispatch actions that are used in the reducer.

## Workflow

```bash
npm start
npm test
npm run build
```

## Original readme

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Commands used to create the project:

```bash
npx create-react-app passer --typescript --use-npm
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser prettier eslint-config-prettier eslint-config-react eslint-plugin-prettier
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
