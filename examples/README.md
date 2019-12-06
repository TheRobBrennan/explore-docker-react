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
+ Create a `./docker-compose.my-app.yml` - feel free to copy `./docker-compose.create-react-app.yml` as an example
+ [OPTIONAL] Add the following scripts to `./package.json`
  + "docker:my-app:up": "docker-compose -f docker-compose.my-app.yml up",
  + "docker:my-app:up:clean": "docker-compose -f docker-compose.my-app.yml up --remove-orphans --build",
  + "docker:my-app:stop": "docker-compose -f docker-compose.my-app.yml down"
