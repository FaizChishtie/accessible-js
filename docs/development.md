# accessible-js development components

*Author:* Faizaan Chishtie

## Development Practices 

Here’s a quick guideline for how we should be developing the module: 

* Test Driven Development (TDD):  
  * All public exported functions should have their own tests! 
  * Using mocha and chai, each function should have their own “describe” with “it” functions to test functionality and errors 
  * Ideally, we should think of the tests before we begin even writing our exported functions. 
  * Private functions don’t necessarily need to be tested but better safe than sorry! 

* Git: 
  * We’re using GitHub for SCM so make sure you know how to create a PR and review code 
  * Pull Requests: 
    * Assign many people on your PRs to get the most code review possible 
    * Keep PRs small to avoid having huge amounts of code to be reviewed, split features up into multiple different tasks that can be tracked so if we break the code, we can revert easily 
    * Merge only your code in your PRs – avoid pulling from other branches and then creating PRs – gets messy 
    * Tests for each PR will be required so we can make sure our code works 
  * Make sure your branch names describe what functionality you’re implementing so we can track changes easily 
  * Travis (CI) will test your build and run the according tests so if that doesn’t pass, you’ll have to figure out why 
* General Practice: 
  * Don’t modify another person's code without asking 
  * If you don’t know something, ask people because sometimes that’s much faster than googling it 
  * Propose new ideas if you have any 
  * We must have some great documentation to accompany our module. Please document your functions. 
  
## 1 – Installation 

> Ideally the user should be able to implement accessibilty on their website with a quick `npm install accessible-js`. This part of the project is focused on making sure that our module installs correctly, is configurable, can be used on the console, can be uninstalled, and is on npm. 

* Development of this component will include: 
  * Actions on `npm install accessible-js` 
    * Configuration for install script (giving user options to customize their install) 
    * Creating a new json type file with data related to accessibility external dependencies (i.e. their configuration) 
  * Installing correct dependencies along with accessible-js 
  * Console commands for the module 
    * --help, --version, --remove, etc.. 
  * Actions on `npm uninstall accessible-js` 
    * Making sure the module is removeable easily 
  * Maintaining version tags for the npm package 
  * Build pipelines for our codebase 
  * Testing accordingly 

## 2 – Tools 

> This group will focus on developing the tools that the module will use for accessibility, some will be easier to implement than others but will require creativity for DOM reading etc.  

```ALL TOOLS SHOULD SUPPORT BEING ENABLED OR DISABLED BY THE DEVELOPER IN THE CONFIGURATION.```
 
* DOM-Reader/Writer 
  * A big part of this will be identifying valid elements from the DOM or where the user selects. It may be beneficial to either find a dependency that can do this for us and give us data that is readable from the DOM or somehow create a core reader as a service so each tool can access a generic data type.  
  * This component is the way we’re going to link our ‘back-end’ to the front end of the developer! 
  * Development of this component will include: 
    * Parsing DOM elements as data to our tools 
    * Creating a generic data type that each tool can use for interpretation 
    * Developing a way to re-render elements or wrapping them in divs to allow tags for javascript/CSS of elements 
    * Rendering divs with appropriate tags based on customization & tools selected 
    * Implementing tags for certain elements should a developer only want certain elements to be modified by accessible-js 

* Hearing 
  * Ideally users should be able to select elements on the screen and have them read out to them. We don’t want to implement a screen reader ourselves, but we want to be able to support a service that does and integrate it into accessible-js. 
  * Development of the installation module will include: 
    * Using data from DOM and converting it to a format that can be read aloud 
    * Supporting different API’s for screen reading (I.e. through URL’s that a developer can customize if they wish) 

* Vision 
  * Ideally users should be able to have the option to view screens in color blind mode (contrast changing) and/or magnify text without having to zoom in with their browser. 
  * Development of the installation module will include: 
    * Passing div elements to the DOM-Reader/Writer to render in screen for view changes 
    * CSS Styling for different types of backgrounds etc 
    * Developing tools to allow magnification of elements (I.e. changing CSS or expanding in popout) 
    
* Keyboard 
  * Ideally users should be able navigate websites using their keyboards only. This component will allow the user to move along the elements of a website by using their keyboard. We can wrap elements of the DOM with tags and JS and render web pages to allow keyboard only navigation. 
  * Development of the installation module will include: 
    * Using data from the DOM-Reader/Writer to make elements selectable 
    * Developing scripts to allow the use of arrow keys for navigation 
    * Passing navigable items to DOM-Reader/Writer 

## 3 – Display 

> Ideally this component would allow the user to be able to recognize a website is accessible, to configure the accessibility tools on a website to display their preferences, and make sure accessible elements are highlighted properly. 

* Development of this component will include: 
    * Creating a stamp for accessible websites 
    * Creating a configuration modal so users can modify websites to their liking 
    * Highlighting tagged elements from the DOM-Reader/Writer based on their tags to allow users to interact with accessible elements 
    * Creating a quick mock website to test the module with 
    * Making sure components work in different browsers 

## 4 – Documentation 

> We must have some great documentation to accompany our module!  

* Development of this component will include: 
  * Installation 
    * How to’s and what to expect after install 
  * Removal 
    * Configuration of install 
  * Use cases 
    * Why a developer would use accessible-js 
  * Examples 
    * Examples with screenshots! 
    * Codepen sample 
  * Contributing 
    * How to contribute to the open source module 
  * Updating dev design 
    * Keeping up with the changes 
