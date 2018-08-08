# Scroll 滚动

**使用指南**

```js
import { Scroll } from 'funt-ui';

Vue.use(Scroll);
```

**代码演示**

<scroll />

```html
<template>
<div>
  <div class="scroll-example">
    <funt-scroll ref="scroll" :options="options" @pullingDown="onPullingDown" @pullingUp="onPullingUp">
      <ul>
        <li v-for="(item,i) in list" :key="i">我是第{{item}}行</li>
      </ul>
    </funt-scroll>
  </div>
</div>
</template>
```

```js
<script>
export default {
  name: 'scroll',
  data() {
    return {
      options: {
        pullDownRefresh: true,
        pullUpLoad: true
      },
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    };
  },
  methods: {
    //上拉加载
    onPullingUp() {
      setTimeout(() => {
        this.list.slice(0, 10).map(v => {
          this.list.push(this.list.length + 1);
        });
        this.$refs.scroll.pullUpEnd();
      }, 2000);
    },
    //下拉刷新
    onPullingDown() {
      setTimeout(() => {
        this.$refs.scroll.pullDownEnd();
      }, 800);
    }
  }
};
</script>
```

**API**

| 参数         | 说明                                               | 类型   |  默认值  |
| :----------- | :------------------------------------------------- | :----- | :------: |
| options      | 参数配置,详见以下 options                          | Object | 详见下表 |
| scrollEvents | 事件类型,可选值 scroll,beforeScrollStart,scrollEnd | Array  |   [ ]    |

**Options**

| 参数            | 说明             |  类型   | 默认值 |
| :-------------- | :--------------- | :-----: | :----: |
| pullDownRefresh | 是否开启下拉刷新 | Boolean | false  |
| pullUpLoad      | 是否开启上拉加载 | Boolean | false  |

**Event**

| 参数              | 说明                                                 | 类型  | 默认值 |
| :---------------- | :--------------------------------------------------- | :---- | :----: |
| beforeScrollStart | 滚动开始前事件:与 scrollEvents 参数搭配使用,参数:无  | Event |   -    |
| scroll            | 滚动事件:与 scrollEvents 参数搭配使用,参数:{x,y}     | Event |   -    |
| scrollEnd         | 滚动结束事件:与 scrollEvents 参数搭配使用,参数:{x,y} | Event |   -    |
| pullingDown       | 下拉刷新回调事件,参数:无                             | Event |   -    |
| pullingUp         | 上拉加载回调事件,参数:无                             | Event |   -    |
