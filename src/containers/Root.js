/**
 * I configure a 'Root' component that is
 * required based on the env variable. The component itself is surrounded by the <Provider>.
 */

let loadedModule = null;

if (process.env.NODE_ENV === 'production') {
  loadedModule = require('./Root.prod.js');
} else {
  loadedModule = require('./Root.dev.js');
}

export const Root = loadedModule;
