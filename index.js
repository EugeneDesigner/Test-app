require('babel-core/register')({});
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
require('babel-polyfill');

var server = require('./server').default;


const PORT = process.env.PORT ? process.env.PORT : 3000

server.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
