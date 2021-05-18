---
title: kokolo
subtitle: A mimic version of gogoro.com homepage
category:
  - Vue
author: Jordon Chen
date: 2021-05-18T13:16:30.342Z
featureImage: /uploads/screen-shot-2021-05-18-at-9.18.20-pm.png
---
# kokolo

A mimic version of [gogoro.com](http://gogoro.com/) homepage.

[https://github.com/Jordon-Chen/kokolo](https://github.com/Jordon-Chen/kokolo)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

## Features

- Vue3
- pug template language
- SCSS
- RWD

## Difficulties

- How to structure the Vue project folders?
    - [Vue tricks: smart layouts for VueJS](https://itnext.io/vue-tricks-smart-layouts-for-vuejs-5c61a472b69b)
    - [How to structure my Vue.js project](https://itnext.io/how-to-structure-my-vue-js-project-e4468db005ac)
- How to use pug template language?
    - [A Beginner’s Guide to Pug](https://www.sitepoint.com/a-beginners-guide-to-pug/)
    - [精通 Pug 樣版語言（一）語法基礎篇](https://www.shirohana.me/blog/articles/2020-mastery-pug-template-engine/)
- How to import SCSS into Vue3 project?
    - [Pre-Processors](https://cli.vuejs.org/guide/css.html#pre-processors)
    - [Vue CLI 專案中引入 SCSS 檔案的四種方法，該如何使用呢？](https://medium.com/unalai/vue-%E5%B0%88%E6%A1%88%E4%B8%AD%E5%BC%95%E5%85%A5-scss-%E6%AA%94%E6%A1%88%E7%9A%84%E5%9B%9B%E7%A8%AE%E6%96%B9%E6%B3%95-%E8%A9%B2%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%91%A2-9babcd3a4ef1)
    - [【Bootstrap 5 客製化教學 - 1】環境架設，SCSS 整合輕鬆建](https://www.youtube.com/watch?v=UMneQfzlz4Y)
- How to prevent import the same SCSS style multiple times?
    - [vue-cli4加载css重复？](https://guguji5.github.io/vue-cli4%E5%8A%A0%E8%BD%BDcss%E9%87%8D%E5%A4%8D%EF%BC%9F/)
- How to make a nav bar from transparent to opaque while scrolling down?
    - [Changing nav-bar color after scrolling?](https://stackoverflow.com/questions/23706003/changing-nav-bar-color-after-scrolling)
    - Keep watching the navbar scrollTop property and divide it by the navbar height.
    - [My scrollTop value is not working? scrollTop, offsetTop, pageYOffset, scrollY? Help!](https://medium.com/@daniwhkim/how-do-i-get-set-top-position-of-elements-scrolltop-offsettop-pageyoffset-scrolly-help-275a7ada5569)
    - [Get element height with Vuejs](https://stackoverflow.com/questions/44948714/get-element-height-with-vuejs/44949482)
- How to make a slider?
    - Change the opacity style while click on the buttons.
- How to make a slider display automatically?
    - [用Vue實現一個簡單的圖片輪播](https://codingnote.cc/zh-tw/p/156861/)
- How to add or remove active class from a div?
    - [How TO - Add a Class](https://www.w3schools.com/howto/howto_js_add_class.asp)
- How to add class on html tag?

    ```jsx
    const dom = window.document
    const htmlNode = dom.getElementsByTagName('html')
    htmlNode[0].classList.add('custom-class')
    ```

- What does aria-hidden mean?
    - [Using the aria-hidden attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute)