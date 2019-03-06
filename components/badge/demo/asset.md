---
order: 0
title:
  zh-CN: 基本
  en-US: Asset
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

## en-US

Assets Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

````jsx
import { Badge, Icon } from 'antd';

ReactDOM.render(
  <div>
    <Badge count={<Icon type="icon-procent" style={{ color: '#FFF' }} />}>
      <a href="#" className="head-example-large" />
    </Badge>
    <Badge count={<Icon type="icon-script" style={{ color: '#FFF' }} />}>
    <a href="#" className="head-example-large" />
    </Badge>
  </div>,
  mountNode
);
````

<style>
.ant-badge:not(.ant-badge-not-a-wrapper) {
  margin-right: 20px;
}
.head-example {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #dae1e9;
  display: inline-block;
  vertical-align: middle;
}
.head-example-large {
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background: #39a12c;
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
}

</style>
