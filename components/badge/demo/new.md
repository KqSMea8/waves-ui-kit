---
order: 0
title:
  zh-CN: 基本
  en-US: New
---

## zh-CN

简单的徽章展示，当 `count` 为 `0` 时，默认不显示，但是可以使用 `showZero` 修改为显示。

## en-US

New Simplest Usage. Badge will be hidden when `count` is `0`, but we can use `showZero` to show it.

````jsx
import { Badge, Icon } from 'antd';

ReactDOM.render(
  <div>
    <Badge count={<Icon type="icon-keepermini" style={{ color: '#263241' }} />}>
      <a href="#" className="head-example-standart" />
    </Badge>
    <Badge count={<Icon type="icon-ledgermini" style={{ color: '#263241' }} />}>
    <a href="#" className="head-example-standart" />
    </Badge>
    <Badge count={<Icon type="script-mini" style={{ color: '#263241' }} />}>
    <a href="#" className="head-example-standart" />
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
.head-example-standart {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: url("https://i.ibb.co/hyPXPx5/merr.png");
  background-size: 100%;
  display: inline-block;
  vertical-align: middle;
}
</style>
