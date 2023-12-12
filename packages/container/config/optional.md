Shared Dependency array can be either specified with exact dependencies in the ModuleFederationPlugin like:
shared: ['react', 'react-dom'],

Or if we want all dependencies in package.json, we can import package json in webpack config file and supply that to the shared property:
const packageJson = require('../package.json');

shared: packageJson.dependencies
