# Demo React Component Library

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

This project skeleton was created to help people get started with creating their own React component library using:

- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)

It also features:

- [Storybook](https://storybook.js.org/) to help you create and show off your components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export your Storybook as static files:

```
npm run storybook:export
```

You can then serve the files under `storybook-static` using S3, GitHub pages, Express etc.

### Generating New Components

I've included a handy NodeJS util file under `util` called `create.js`. Instead of copy pasting components to create a new component, you can instead run this command to generate all the files you need to start building out a new component. To use it:

```
npm run generate ComponentName
```

This will generate:

```
/src
  /ComponentName
    ComponentName.tsx
    ComponentName.stories.tsx
    ComponentName.test.tsx
    ComponentName.types.ts
    ComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

Don't forget to add the component to your `index.ts` exports if you want the library to export the component!

### Installing Component Library Locally

Let's say you have another project (`test-app`) on your machine that you want to try installing the component library into without having to first publish the component library. In the `test-app` directory, you can run:

```
npm i --save ../react-component-library
```

which will install the local component library as a dependency in `test-app`. It'll then appear as a dependency in `package.json` like:

```JSON
  ...
  "dependencies": {
    ...
    "react-component-library": "file:../react-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

## Publishing

### Hosting via NPM

First, make sure you have an NPM account and are [logged into NPM using the `npm login` command.](https://docs.npmjs.com/creating-a-new-npm-user-account)

Then update the `name` field in `package.json` to reflect your NPM package name in your private or public NPM registry. Then run:

```
npm publish
```

The `"prepublishOnly": "npm run build"` script in `package.json` will execute before publish occurs, ensuring the `build/` directory and the compiled component library exist.

### Hosting via GitHub

I recommend you host the component library using NPM. However, if you don't want to use NPM, you can use GitHub to host it instead.

You'll need to remove `build/` from `.gitignore`, build the component library (`npm run build`), add, commit and push the contents of `build`.

You can then install your library into other projects by running:

```
npm i --save git+https://github.com/mazurolegdev/react-component-library.git#branch-name
```

OR

```
npm i --save github:mazurolegdev/biocadless#branch-name
```

## Usage

Let's say you created a public NPM package called `biocadless` with the `Alert` and `Button` component created in this repository.

Usage of the component (after the library installed as a dependency into another project) will be:

```TSX
import React from "react";
import { Alert, Button } from "biocadless";

const App = () => (
  <div className="app-container">
    <h1>Hello I'm consuming the component library</h1>

    <Alert type="success" message="Alert Success Text" />

    <Button type="primary" message="Primary Button" />
  </div>
);

export default App;
```