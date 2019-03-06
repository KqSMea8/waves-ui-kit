---
order: 2
title:
  zh-CN: 小型进度条
  en-US: Progress bar
---

## zh-CN

适合放在较狭窄的区域内。

## en-US

A standard progress bar.

````jsx
import { Progress } from 'antd';

ReactDOM.render(
  <div style={{ width: 170 }}>
    <Progress percent={50} size="small" showInfo={false} />
    <Progress percent={70} size="small" status="exception" showInfo={false} />
    <Progress percent={100} size="small" showInfo={false} />
  </div>,
  mountNode
);
````
