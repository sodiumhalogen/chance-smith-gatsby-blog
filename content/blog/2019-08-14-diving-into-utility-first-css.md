---
title: Diving Into Utility First CSS
date: "2019-08-14T11:44:00.284Z"
tags: CSS, BEM, Utility-First-CSS
---

At [Sodium Halogen](http://sodiumhalogen.com?ref=chancesmithio-blog), we've seen many projects with different types of CSS methodolgies and frameworks (BEM, Bootstrap, Foundation, Bulma).

## CSS + React has been wonderful with Styled Components

For over a year we've been playing with ReactJS + Styled-Components. We've loved not having to worry about CSS naming and overwriting cascading effects. It's helped a ton.

## What about projects that need classes to style elements?

We've recently had a project that is vanilla CSS and JS. No frameworks at all! 🙀

We didn't see this coming. It's also been a bit since we have had to create/write classes. Components in React there was less context switching having all HTML, CSS, and JS all in one file. Context switching is mentally expensive and time consuming.

## Looking at Utility-First CSS

[Dan Mal](http://danmall.me/) (genius) was the first to introduce us to utility classses. You might have seen the [spacing utility classes in Bootstrap](https://getbootstrap.com/docs/4.3/utilities/spacing/) before.

Utility classes are tiny bits of CSS, tied to a class name, that do one thing. Here are a few examples...

```
.flex-1 {flex: 1;}
.ml-5 {margin-left: 5px;}
.ml-10 {margin-left: 10px;}
.ml-20 {margin-left: 20px;}
.pl-5 {padding-left: 5px;}
.pl-10 {padding-left: 10px;}
.pl-20 {padding-left: 20px;}
```

## Pros and Cons to Utility-First CSS

*Pros*

- writing way less CSS
- more time in HTML (local space), less time in CSS files (global space)
- way less class name creation/modifying
- less BEM modifier class overhead

*Cons*

- not as easy to duplicate styles
- messy HTML, similar to inline-styles