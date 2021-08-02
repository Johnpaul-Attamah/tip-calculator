# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot
![view Screenshots](https://user-images.githubusercontent.com/44214523/126873890-10644d6b-1f39-4530-9343-068e9e1fd272.png)

### Links

- Solution URL: [view codes](https://your-solution-url.com)
- Live Site URL: [Go live](https://determined-knuth-12c793.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow

### What I learned

## HTML 
- How to structure markup for pages
- When you do not need to use html forms
- how to use multiple buttons
- how to use text input as button

## Css
- Group elements together with classes
- Write css media query for larger screens
- Interpret png designs into live web pages

```css
root {
    --color-primary: hsl(172, 67%, 45%);
    --color-primary-light: hsl(185, 41%, 84%);
    --color-primary-thin: hsl(189, 41%, 97%);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
```
## Javascript
- variable scopes
- hoisting
- Using Es6 classes with dom objects
- hide and show css classes
- manipulating dom with querySelector() and querySelectorAll()
- changing element text content
- converting strings to integer
- filtering out number from character strings

```js
for(let btn of btns) {
    btn.addEventListener('click', (e) => {
        //add active class
    ...

    class TipCalculator {
    /**
     * 
     * @param {(Number) the bill input} bill 
     * @param {(Number) Total Number of people} size 
     */
    constructor(bill, size) {
        this.bill = bill;
        ...
    }
    ...
```
### Continued development

- build more pages with css flexbox
- structure more advanced templates / layouts
- responsive design
- advanced dom manipulations
- basic Javascript aapplications


### Useful resources

- [Hide arrows in input type number](https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp) - Straight to the point css rules to hide the default arrow that allows increase and decrease of number input

## Author

- Website - [Johnpaul Attamah](https://github.com/Johnpaul-Attamah)
- Frontend Mentor - [Johnpaul-Attamah](https://www.frontendmentor.io/profile/Johnpaul-Attamah)
- LinkedIn - [Johnpaul](https://www.linkedin.com/in/johnpaul-attamah-4b265983/)

