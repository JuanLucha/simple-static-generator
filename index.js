const fs = require('fs')
const path = require('path')

// Constants
const sourceDir = './src'
const componentsDir = `${sourceDir}/components`
const pagesExtension = '.html'
const outputDir = './dist'

let sourceContent = fs.readdirSync(sourceDir)

// Get the components content
let componentsNames = fs.readdirSync(componentsDir)
let components = {}
componentsNames.forEach(componentName => {
  const nameWithoutExtension = componentName.split('.')[0]
  components[nameWithoutExtension] = fs.readFileSync(`${componentsDir}/${componentName}`, 'utf8')
})

// Insert the components into the pages
let pagesNames = sourceContent.filter(file => path.extname(file).toLocaleLowerCase() === pagesExtension)
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


console.log(pages)