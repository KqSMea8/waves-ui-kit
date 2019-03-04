---
order: 8
title:
    zh-CN: 前缀和后缀
    en-US: prefix and suffix
---

## zh-CN

在输入框上添加前缀或后缀图标。

## en-US

Add prefix or suffix icons inside input.

````jsx
import { Input, Icon } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="icon-close" onClick={this.emitEmpty} /> : null;
    return (
      <Input
        placeholder="Enter your username"
        prefix={<Icon type="icon-search" style={{ color: 'rgb(155, 166, 178)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
    );
  }
}

ReactDOM.render(<App />, mountNode);
````

````css
.anticon-icon-close {
  cursor: pointer;
  color: #9ba6b2;
  transition: color 0.3s;
  font-size: 13px;
}
.anticon-icon-close:hover {
  color: #1f5af6;
}
````
