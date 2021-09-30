# CV in React

Welcome to my first project in React!

## Description

CV in React is fetching data from an api located on my web server at https://florianegrosset.com/api/cv/read.php?id=1 and displaying the different sections in a dynamic way. Please refer to the folder cv-api at https://github.com/grosset-floriane/cv-api for more information about it.

CV in React is currently in development. For now its purpose is to display my own cv and I am currently working on the first styling (CodingLightTheme) from mobile to desktop.

## Styles

### Styles components

The styles are written with the use of Styled Components (https://styled-components.com).

### Current theme

I am currently working on the first theme: CodeLightTheme. You can have a view of how the cv will look like in the future here: https://docs.google.com/document/d/1Qkxr9QHt0LkvpzlyZIt7j6DDMx5b8ZZ9l9zKTq-v7vo/edit?usp=sharing

This style is inspired by the way code is displayed on the Visual Studio Code editor, in a light version, to enable printing.

## Further developements

### Multiple styles

I am planning to enable by button click the display of the cv in other themes such as a coding dark mode (CodingDarkTheme) and one traditional paper print (PaperPrintTheme).

### Hover: enhance what a cv can be online

While creating the database for the cv-api, I pre-planned to add hovering functionalities on the cv entries and linking to other pages. 

### Forms: add / remove / order data

I would like to create forms to add content to the database and maybe to enable reordering of the elements in the page, the creation of new categories and much more.


## About the author

My name is Floriane Grosset and I am a web developper based in Hamburg, Germany. I am currently learning React and this project is here to help me learn with a concrete result. 
You can learn more about me at: https://florianegrosset.com/

## Log of changes
- 27/09/2021: from class components to functional components; set cvContext to handle global context; create function and buttons to switch themes 
