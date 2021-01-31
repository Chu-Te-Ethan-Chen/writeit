---
title: Vue2 to Vue3
subtitle: 5 changes & 4 new features
category:
  - Vue
author: Jordon Chen
date: 2021-01-31T07:11:01.304Z
featureImage: /uploads/photo-1478796415026-3c85ee65975e.jpeg
---
I recently learned the differences between Vue2 and Vue3.  Here are my notes from the lesson.

Change

1. createAPP()

   ```
   Vue.createApp(){
   }.mount('#app');
   ```
2. components registerd on app

   ```
   const app = Vue.createApp(){}
   app.component('', {})
   app.mount('#app')
   ```
3. transitions: v-enter -> v-enter-from
4. createdRouter()

   ```
   import { createRouter, createdWebHistory } from 'vue-router';
   const router = createRouter({
       history: createdWebHistory(),
   });
   ```
5. Vuex: createStore()

   ```
   import { createStore } from 'vuex';
   const store = createStore({
   ......
   })
   ```

New

1. Teleport
2. Fragments

   It's ok to not have only one div. Multiple div is available.

   ```
   <template>
     <div></div>
     <div></div>
   </template>
   ```
3. Composition API
4. TyepScript