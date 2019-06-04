# Simple Static Generator

A simple static site generator using nodejs

## Installation
You will need NodeJS installed.

Then clone this repository or download it on zip and uncompress the file.

Then change the name of the folder to the name of your application.

Then you enter the folder in command line and install all the dependencies with `yarn` or `npm i`.

After that, you just start the application with `yarn start` or `npm start`. This will start a process with nodemon to compile your site on any change and will start a parallel proccess with a live server that will serve your compiled site on `http://127.0.0.1:8080/`, opening a browser automatically.

Now you can follow the next instructions to create your site under `src` folder.

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

## How to deploy your site
You just need to upload your `dist` folder to your server.

If you have been using the live server started with `yarn start` or `npm start`, then your site is already compiled on `dist`.

If you have been developing without the live server, then you can just run `yarn start` for the site to be compiled.

## Notes and comments
You can ask anything or send comments directly to my email juanlucha at the big G dot com :)