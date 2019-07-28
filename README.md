#MinimalReactTemplate

This is a basic template for a React application using es6 and Webpack for bundling. 

To run this, clone the repository, makes sure [Yarn](https://yarnpkg.com/) is installed on your system and run

>yarn

to install all the dependent packages, then 

>yarn build

to transpile and bundle.

And then open public\index.html in a browser. If all went well, you should see a page that displays Hello World.

During development it may be more convenient to run

>yarn devserver

This will start a local web server on port 8080. You can then open <http://localhost:8080/webpack-dev-server/> in your browser and whenever you make changes to any files webpack will rebuild the application and reload the web browser and display any error messages there.
