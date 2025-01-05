---
title: user-login
subtitle: A react-based app to let user login.
category:
  - React
author: Chu-Te (Ethan) Chen
date: 2021-06-10T00:00:39.507Z
featureImage: /uploads/screen-shot-2021-06-09-at-1.31.04-pm.jpg
---
A react-based app to let user login.

Demo: [http://chu-te-ethan-chen.github.io/user-login](http://chu-te-ethan-chen.github.io/user-login)

Github code: [https://github.com/Chu-Te-Ethan-Chen/user-login](https://github.com/Chu-Te-Ethan-Chen/user-login)

* This app consists of 4 components: UI, MainHeader, Login, and Home.
* Using [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) to manage the state of email, password, and their validation.
* [forwardRef()](https://reactjs.org/docs/forwarding-refs.html) allows parent components to access components through ref.
* [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle) customizes the instance value that is exposed to parent components when using ref.
* Using [Context](https://reactjs.org/docs/context.html) to manage the user's authentication throughout the entire app.
* Implemented auto login feature through [useEffect](https://reactjs.org/docs/hooks-effect.html).
* Store status in [localstorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) of the browser.

Learning: [useEffect](https://reactjs.org/docs/hooks-effect.html), [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer), [Context](https://reactjs.org/docs/context.html), [useImperativeHandle](https://reactjs.org/docs/hooks-reference.html#useimperativehandle), [forwardRef()](https://reactjs.org/docs/forwarding-refs.html)

Github code: <https://github.com/Jordon-Chen/user-login>