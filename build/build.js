'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')

const webpackDLLConfig = require('./webpack.dll.conf')
const spinner = ora('building for production...')
spinner.start()

// rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
//   if (err) throw err
//   webpack(webpackConfig, function (err, stats) {
//     spinner.stop()
//     if (err) throw err
//     process.stdout.write(stats.toString({
//       colors: true,
//       modules: false,
//       children: false,
//       chunks: false,
//       chunkModules: false
//     }) + '\n\n')

//     if (stats.hasErrors()) {
//       console.log(chalk.red('  Build failed with errors.\n'))
//       process.exit(1)
//     }

//     console.log(chalk.cyan('  Build complete.\n'))
//     console.log(chalk.yellow(
//       '  Tip: built files are meant to be served over an HTTP server.\n' +
//       '  Opening index.html over file:// won\'t work.\n'
//     ))
//   })
// })
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  //   // 先创建dll
  webpack(webpackDLLConfig, (_err, _stats) => {
    if (_err) throw _err
    // 编译页面
    const webpackConfig = require('./webpack.prod.conf')
    webpack(webpackConfig, (err, stats) => {
      spinner.stop()
      if (err) throw err
      process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')

      if (stats.hasErrors()) {
        console.log(chalk.red('  Build failed with errors.\n'))
        process.exit(1)
      }

      console.log(chalk.cyan('  Build complete.\n'))
      console.log(chalk.yellow(
        '  Tip: built files are meant to be served over an HTTP server.\n' +
        '  Opening index.html over file:// won\'t work.\n'
      ))
    })
  })
})
