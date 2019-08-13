#MinimalReactTemplate

This is a basic template for a React application using Babel to transpile es6 and Webpack for bundling. 

There are a couple different directories with different levels of functionality:

| Directory | Functionality                  |
|-----------|--------------------------------|
| 01-basic  | just React                     |
| 02-redux  | React with Redux & react-redux |

To run this, clone the repository, cd to one of the directories above and, assuming you have [Yarn](https://yarnpkg.com/) installed, run

>yarn

to install all the dependent packages, then 

>yarn build

to transpile and bundle.

And then open public\index.html in a browser. If things went well, you should see a page that displays Hello World.

During development it may be more convenient to run

>yarn devserver

This will start a local web server on port 8080. You can then open <http://localhost:8080/webpack-dev-server/> in your browser and whenever you make changes to any files webpack will rebuild the application and reload the web browser and display any error messages there.
