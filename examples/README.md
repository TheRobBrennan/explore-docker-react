# Welcome

This folder contains example [React](https://reactjs.org) applications.

## Getting started

Once you have configured your development environment, you can generate a new React app using [Create React App](https://create-react-app.dev):

```sh
# Navigate to the examples folder to create your app
$ cd examples

# Use the latest create-react-app to generate a new app
$ npx create-react-app create-react-app-example-XX

# Navigate to the newly created application
$ cd create-react-app-example-XX
```

Once you have created your app - `create-react-app-example-XX` in the above example - all that is left to do is:

+ Create `./examples/create-react-app-example-XX/Dockerfile` - feel free to copy `examples/create-react-app-example-01/Dockerfile` as an example

+ Create a `./examples/create-react-app-example-XX/docker-compose.yml` - feel free to copy `./examples/create-react-app-example-01/docker-compose.yml` as an example

+ Make sure that `./examples/create-react-app-example-XX/package.json` contains the following scripts

```json
{
  "scripts": {
    "build": "docker-compose up --remove-orphans --build --force-recreate",
    "start": "docker-compose up",
    "stop": "docker-compose down",
    "build:local": "react-scripts build",
    "start:local": "react-scripts start"
  }
}
```

+ [OPTIONAL] Add the following scripts to `./package.json`

```json
{
  "scripts": {
    "build:cra-example-XX": "npm run build:create-react-app-example-XX-with-more-descriptive-path",
    "start:cra-example-XX": "npm run start:create-react-app-example-XX-with-more-descriptive-path",
    "stop:cra-example-XX": "npm run stop:create-react-app-example-XX-with-more-descriptive-path",
    "build:create-react-app-example-XX-with-more-descriptive-path": "cd examples/create-react-app-example-XX-with-more-descriptive-path && npm run build",
    "start:create-react-app-example-XX-with-more-descriptive-path": "cd examples/create-react-app-example-XX-with-more-descriptive-path && npm start",
    "stop:create-react-app-example-XX-with-more-descriptive-path": "cd examples/create-react-app-example-XX-with-more-descriptive-path && npm run stop"
  }
}
```
