# Welcome

This folder contains example [React](https://reactjs.org) applications.

## Getting started

Once you have configured your development environment, you can generate a new React app using [Create React App](https://create-react-app.dev):

```sh
# Navigate to the examples folder to create your app
$ cd examples

# Use the latest create-react-app to generate a new app
$ npx create-react-app my-app

# Navigate to the newly created application
$ cd my-app
```

Once you have created your app - `my-app` in the above example - all that is left to do is:

+ Create `./examples/my-app/Dockerfile` - feel free to copy `examples/create-react-app/Dockerfile` as an example
+ Create a `./examples/my-app/docker-compose.yml` - feel free to copy `./examples/create-react-app/docker-compose.yml` as an example
+ [OPTIONAL] Add the following scripts to `./package.json`
  + "start:my-app": "cd examples/my-app && npm start",
  + "start:my-app:clean": "cd examples/my-app && npm run build",
  + "stop:my-app": "cd examples/my-app && npm run stop",
+ Make sure that `./examples/my-app/package.json` contains the following scripts
  + "start": "docker-compose up",
  + "build": "docker-compose up --remove-orphans --build --force-recreate",
  + "stop": "docker-compose down",
  + "start:local": "react-scripts start",
  + "build:local": "react-scripts build",
