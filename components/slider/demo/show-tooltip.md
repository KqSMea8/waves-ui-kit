---
order: 7
title:
  zh-CN: 控制 ToolTip 的显示
  en-US: Slider
---

## zh-CN

当 `tooltipVisible` 为 `true` 时，将始终显示ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。

## en-US

Basic slider. When `range` is `true`, display as dual thumb mode. When `disable` is `true`, the slider will not be interactable.

````jsx
import { Slider } from 'antd';

const marks = {
0: '0',
1: '1',
2: '2',
3: '3',
4: '4',
5: '5',
6: '6',
7: '7',
8: '8',
};

ReactDOM.render(
<div>
  <Slider marks={marks} step={10} defaultValue={4} min={0} max={8} tooltipVisible />
</div>,
mountNode
);
````
