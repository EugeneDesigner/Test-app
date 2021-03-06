import { match, RouterContext } from 'react-router'
import { renderToString } from 'react-dom/server'
import { createLocation } from 'history'
import React from 'react'
import { Provider } from 'react-redux'
import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config.dev'
import webpakMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import routes from './src/containers/routes'
import {configureStore} from './src/store/configureStore'


const app = express()

// const compiler = webpack(config)
// app.use(webpakMiddleware(compiler, {
//   hot: true,
//   publicPath: config.output.publicPath,
//   noInfo: true
// }))
//
// app.use(webpackHotMiddleware(compiler))



app.use(express.static(__dirname + '/dist'))

app.get('/*', (req, res) => {
  const location = createLocation(req.url)
  const store = configureStore()
   match({ routes:routes, location}, (err, redirect, props) => {
     const appHtml = renderToString(<Provider store={store}><RouterContext {...props}/></Provider>)
    res.send(renderPage(appHtml))
  })
})
function renderPage(appHtml) {
  return `
    <!doctype html>
    <html lang="en">
    <head>
      <title>Test app</title>
      <meta charset="utf-8">
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
      <meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=1, user-scalable=no" />
    </head>
    <body>
      <div id="root">${appHtml}</div>
      <script src="/bundle.js"></script>
    </body>

   `
}

export default app
