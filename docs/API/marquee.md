# Marquee 跑马灯(多)

**使用指南**

```js
import { Marquee } from 'funt-ui';

Vue.use(Marquee);
```

**代码演示**

<ClientOnly>
<marquee-stair />
</ClientOnly>  

```html
  <funt-marquee>
    <funt-marquee-item v-for="(item,i) in list" :key="i">{{item}}</funt-marquee-item>
  </funt-marquee>
```

<ClientOnly>
<marquee-line />
</ClientOnly>  

```html
  <funt-marquee type="line">
    <funt-marquee-item v-for="(item,i) in list" :key="i">{{item}}</funt-marquee-item>
  </funt-marquee>
```

```js
export default {
  data() {
    return {
      list: ['Javascript是世界上最好的语言1', 'Javascript是世界上最好的语言2', 'Javascript是世界上最好的语言3', 'Javascript是世界上最好的语言4', 'Javascript是世界上最好的语言5']
    };
  }
};
```

**API**

| 参数  | 说明                                   | 类型   | 默认值 |
| :---- | :------------------------------------- | :----- | :----: |
| speed | 动画速度,可选值 fast(快),slow(慢)      | String |  fast  |
| type  | 动画方式,可选值 stair(阶梯),line(平滑) | String | stair  |
