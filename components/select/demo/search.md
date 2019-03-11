---
order: 1
title:
  zh-CN: 带搜索框
  en-US: Asset
---

## zh-CN

展开后可对选项进行搜索。

## en-US

Asset / Currency

````jsx
import { Select } from 'antd';

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

const styles = {
  wrapper: {
    width: '100%',
  },
  pic: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#dae1e9',
    float: 'left',
  },
  title: {
    margin: '0 0 0 10px',
    float: 'left',
  },
  balance: {
    float: 'right',
  },
};


const Item = (props) => (
  <div style={styles.wrapper}>
    <div class="picselected" style={styles.pic}/><div style={styles.title}>{props.name}</div><div style={styles.balance}>{props.balance}</div>
  </div>
);

ReactDOM.render(
  <Select
    showSearch
    style={{ width: 380 }}
    placeholder="Select asset"
    optionFilterProp="children"
    onChange={handleChange}
    onFocus={handleFocus}
    onBlur={handleBlur}
    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
    <Option style={{ padding: '9px 12px', width: '100%' }} value="Bitcoin"><Item name="Bitcoin" balance="0.00020969 BTC"/></Option>
    <Option style={{ padding: '9px 12px', width: '100%' }} value="Ethereum"><Item name="Ethereum" balance="2.00378404 ETH"/></Option>
    <Option style={{ padding: '9px 12px', width: '100%' }} value="Litecoin"><Item name="Litecoin" balance="194.28460564 LTC"/></Option>
  </Select>,
  mountNode
);
````
