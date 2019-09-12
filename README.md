#MinimalReactTemplate

This is morphing into something else.

Initally a very basic template for a React application using Babel to transpile es6 and Webpack for bundling, 
it step-by-step builds into a full fledged application with authentication and cloud middleware. 

There's a series of directories which progressively add more functionality:

| Directory         | Functionality                                        |
|-------------------|------------------------------------------------------|
| 01-basic          | just React                                           |
| 02-redux          |  React with Redux & react-redux                      |
| 03-react-bootstrp | Adds styles, react-bootstrap, sass and a  stylesheet |
| 04-react-router   | Adds react router and connected-react-router         |
| 05-redux-saga     | Adds redux-saga middleware                           |

To run this, clone the repository, cd to one of the directories above and, assuming you have [Yarn](https://yarnpkg.com/) installed, run

>yarn

to install all the dependent packages, then 

>yarn build

to transpile and bundle.

And then open public\index.html in a browser. If things went well, you should see a page that displays Hello World.

During development it may be more convenient to run

>yarn devserver

This will start a local web server on port 8080. You can then open <http://localhost:8080/webpack-dev-server/> in your browser and whenever you make changes to any files webpack will rebuild the application and reload the web browser and display any error messages there.
