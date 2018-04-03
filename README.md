# ReactJS Single Page Application Boilerplate

This repo is a simple tool I use to both introduce people into the world of react single page application development and as a boilerplate for my own ReactJS projects. The aim is to include all of the basic tools, scripts and processes needed to create a basic react spa application. If you spot something that can be improved, or think that something can be added to better achieve best practice then please contribute!

This boilerplate aims to use CSS in JS with radium rather than scss or css. Because of this, node-sass has not be included within the build pipline. 

## App structure

* ```src/enpoints``` is intended for application 'pages' and where components called by react-router should be stored
* ```src/features``` is intended for collections of components to provide application features. Features should be redux state aware and handle the majority of redux state management. This is where reducers and sagas should be stored.
* ```src/components``` is intended for simple, generic components to be stored. Components should generally not directly interact with application state but can use component state.

## Step By Step Environment Setup (Win)

Use the following process to setup and start using this boilerplate on a windows machine.

### Powershell
- Search for powershell in windows shell
- Open powershell and add to favourites bar

### Setting up Git version control
- Download and install git for windows [Go to GIT](https://git-scm.com/download/win)
- Create a free github account [Go to GitHub](https://github.com/)
- Download and install GitKracken [Go to GitKracken](https://www.gitkraken.com/)
- Launch and Link GitKracken to your github account

### Setting up NodeJS
- Download the windows installer for the CURRENT NodeJS version
- Install NodeJS by running the executable
- Open powershell
- Test node by using command `node -v`
- Test NPM by using command `npm -v`

### Installing global NodeJS libs
- Install yarn `npm install -g yarn`

### Cloning project files
- Using GitKracken, clone this project
- Open powershell and navigate to the project directoy
- Use command `yarn`
- Use command `yarn start`

### Setup Programming IDE
- Download and install [Atom Beta](https://atom.io/beta)
- Open Atom and save the application to favourites
- File -> Add Project Files -> Select the project files folder
- Open powershell and run the following commands
- `apm install linter-eslint`
- `apm install react`
- `apm install emmet`
- `apm install git-blame`
- `apm install atom-beautify`
- `apm install autocomplete-paths`
- `apm install highlight-selected`
- `apm install file-icons`
- `apm install minimap`
- `apm install autoclose-html`
- `apm install pigments`
- `apm install auto-detect-indentation`
- Re-launch Atom and agree to all the messages
- Go to Preferences -> Core and scroll down to "Ignored Names". Add node_modules to that list.
- Re-launch Atom

### Project Commands
- Start the local developer server `yarn start`
- Compile for development `yarn build:dev`
- Compile for production `yarn build:dist`
