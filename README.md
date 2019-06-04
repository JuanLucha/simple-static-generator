# Simple Static Generator

A simple static site generator using nodejs

## How to use it

### Locating pages files
Put your pages (home, about us, etc...) into the root of `src` folder as plain html files. Please check the `src/index.html` and `src/about-us.html` files to see examples.

### Locating components files
Put your components into `src/components` folder as plain html files. Please check the sample files in `src/components` to check how to do it.

### How to insert the components into the pages
Simple Static Generator uses a very simple templating notation in the html of the pages. To insert a component in a specific file, put a tag with this format:
`{{ component }}`
where `component` is the name of the file where the component is defined. 

In the files `src/index.html` and `src/about-us.html` you can find the `{{ header }}` tag. That tag is going to be replaced with the content of the file `src/components/header.html`.

It's important to maintain the same case in the tag and the filename of the file containing the component. It's very important to let a space between the curly braces and the component tag. `{{ header }}` will work, while `{{header}}` won't.