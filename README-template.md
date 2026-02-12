# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](/images/screenshot.jpg)

### Links

- Solution URL: [See Solution;](https://github.com/triplekdev/Time-tracking-dashboard-practice)
- Live Site URL: [See site;](https://time-tracking-dashboard-practice.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learnt a lot, of which most are listed below; I learnt:
- How to use custom data-* attributes.
- How to fetch data and the syntax for it.
- How to use and manage the data.
- How to populate the DOM with my data.
- How to handle JSON.
- How to breakdown complex functions into smaller functions.
- How to loop through data.

Here are some code snippets I'm proud of:

```css
/*CSS I'm proud of*/
		.current {
			display: none;
			font-size: var(--FS-38);
			font-weight: 300;
			margin-top: 10px;
			
			@media (width >=calc(600 / 16 * 1rem)) {
				font-size: 48px;
			}
		}
		
		.current[data-active] {
		  display: inline-block;
		}
		
		.previous {
			display: none;
			color: var(--C-CONTENT-TEXT);
			margin-top: 10px;
			
			@media (width >=calc(600 / 16 * 1rem)) {
				font-size: 13px;
			}
		}
		
		.previous[data-active] {
	  display: inline-block;
	}
```

```js
<!--JS I'm proud of:-->
  function titleToImageSrcValue(title) {
	return 'images/icon-' + stringToSelector(title) + '.svg'
}
const moreIcon = document.createElement('img')
 	moreIcon.setAttribute('src', 'images/icon-ellipsis.svg')
 	moreIcon.className = 'more-icon'
	
 	activityTop.append(moreIcon)
	
 	activitySection.append(activityTop)
```

### Continued development

I'm going to continue developing my handling of the DOM and the breaking down of complex functions into tinier function 

## Author

- Github - [Triple K](https://github.com/triplekdev)
- Frontend Mentor - [@triplekdev](https://www.frontendmentor.io/profile/triplekdev)
- Twitter - [@3plkk](https://x.com/3plkk)

## Acknowledgments

I want to specially thank [Surasek](https://www.frontendmentor.io/profile/nuzaty), his project solution gave me the idea of how to start my own JS and made me do a lot of research thereby, increasing my knowledge of JS.