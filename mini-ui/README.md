# miniyee-ui

## quick start

#### install
```
npm install mini-ui 
```
#### 全局引入
```javascript
import MiniUi from "mini-ui";
import 'miniyee_ui/lib/mini_ui.css';
Vue.use(MiniUi)
```
#### 按需引入
```javascript
//以button为例
import 'miniyee_ui/lib/mini_ui.css';
import { MiniOriginalButton, MiniBeautyButton } from 'mini-ui';
Vue.use(MiniOriginalButton)
Vue.use(MiniBeautyButton)
//其余不需要花括号
```

有待完善：将组件样式拆分打包。敬请期待~
