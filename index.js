const fs = require('fs')
const path = require('path')
const rimraf = require('rimraf')
const ncp = require('ncp').ncp

// Constants
const sourceDir = './src'
const componentsDir = `${sourceDir}/components`
const pagesExtension = '.html'
const outputDir = './dist'
const assetsDirname = 'assets'
const assetsDir = `${sourceDir}/${assetsDirname}`
const outputAssetsDir = `${outputDir}/${assetsDirname}`

let sourceContent = fs.readdirSync(sourceDir)

// Get the components content
const componentsNames = fs.readdirSync(componentsDir)
let components = {}
componentsNames.forEach(componentName => {
  const nameWithoutExtension = componentName.split('.')[0]
  components[nameWithoutExtension] = fs.readFileSync(`${componentsDir}/${componentName}`, 'utf8')
})

// Insert the components into the pages
const pagesNames = sourceContent.filter(file => path.extname(file).toLocaleLowerCase() === pagesExtension)
let pages = {}
pagesNames.forEach(pageName => {
  pages[pageName] = fs.readFileSync(`${sourceDir}/${pageName}`, 'utf8')
})
Object.keys(pages).forEach(pageName => {
  Object.keys(components).forEach(componentName => {
    const componentKeyInTemplate = `{{ ${componentName} }}`
    pages[pageName] = pages[pageName].replace(componentKeyInTemplate, components[componentName])
  })
})

// Output the replaced files into the output directory
rimraf.sync(outputDir)
fs.mkdirSync(outputDir)
pagesNames.forEach(pageName => {
  fs.writeFileSync(`${outputDir}/${pageName}`, pages[pageName])
})

// Copy all the assets to output directory
ncp(assetsDir, `${outputDir}/${assetsDirname}`, error => {
  if (error) {
    return console.error(error)
  }
  console.log('Static site generated!')
})
