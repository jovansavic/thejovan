---
layout: post
title:  "Detect dark or light mode with CSS"
date:   2020-01-21
categories: design development products
local_thumbnail: dark-and-light-mode.png
published: true
---


## How to check users preferred theme mode?
You can do it easily with the amazing **prefers-color-scheme** media feature. Scroll down for more.

<img src="/assets/images/blog/{{page.local_thumbnail}}" alt="" style="width: 100%;">
<br>

## Dark mode check
<p></p>
> ## prefers-color-scheme: dark

Indicates that user has notified the system that they prefer an interface that has a dark theme.

When you want a style that applies to users with dark mode turned on, add your style inside media query below. If we want the black background and white text for dark mode users, we will type something like this:

``` css

  @media (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: white;
    }
  }
```  
<br>

## Light mode check
<p></p>
> ## prefers-color-scheme: light

Indicates that user has notified the system that they prefer an interface that has a light theme.

When you want a style that applies to users with ligh mode turned on, add your style inside media query below. If we want the white background and black text for light mode users, we will type something like this:

``` css

  @media (prefers-color-scheme: light) {
    body {
      background-color: white;
      color: black;
    }
  }
``` 


<br>

## There is a third option. When a user didn't set dark/light mode.
<p></p>
> ## prefers-color-scheme: no-preference

Indicates that the user has made no preference known to the system. This keyword value evaluates to false in the boolean context.


