<p align="center">
    <img alt="logo" src="https://github.com/FuntSui-FE/funt-ui/blob/master/build/funt-ui.png" width="120" style="margin-bottom: 10px;">
</p>  

<h1 align="center" style="margin: 30px 0 35px;">Funt-ui</h1>
<h3 align="center" style="margin: 30px 0 35px;">A Mobile UI Components built on Vue</h3>
<p align="center">
    <img src="https://img.shields.io/npm/v/funt-ui.svg?style=flat" alt="npm version" />
    <!-- <img src="https://travis-ci.org/FuntSui-FE/funt-ui.svg?branch=master" alt="Build Status" /> -->
    <img src="https://img.shields.io/npm/dt/funt-ui.svg" alt="downloads" />
    <img src="http://img.badgesize.io/https://unpkg.com/funt-ui/lib/funt-ui.min.js?label=JS%20size" alt="JS  Size" />
    <img src="http://img.badgesize.io/https://unpkg.com/funt-ui/lib/styles/funt-ui.css?label=CSS%20size" alt="CSS  Size" />
    <!-- <img src="http://img.badgesize.io/https://unpkg.com/funt-ui/lib/funt-ui.min.js?compression=gzip&style=flat-square&label=JS%20gzip%20size" alt="JS Gzip Size" />
    <img src="http://img.badgesize.io/https://unpkg.com/funt-ui/lib/styles/funt-ui.css?compression=gzip&style=flat-square&label=CSS%20gzip%20size" alt="CSS Gzip Size" /> -->
</p>

## 安装

#### NPM

```shell
npm i funt-ui -S
```

#### YARN

```shell
yarn add funt-ui -S
```

## 快速上手

### 引入 funt-ui

**1.引入所有组件**

```js
import Vue from 'vue';
import Funt from 'funt-ui';
import 'funt-ui/lib/styles/funt-ui.css';
Vue.use(Funt);
```

#### 2.按需引入组件

```js
import Vue from 'vue';
import { Loading, Scroll } from 'funt-ui';
import 'funt-ui/lib/styles/funt-ui.css';
Vue.use(Loading);
Vue.use(Scroll);
```
