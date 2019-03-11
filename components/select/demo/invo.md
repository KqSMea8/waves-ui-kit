---
order: 1
title:
  zh-CN: 带搜索框
  en-US: Invo
---

## zh-CN

展开后可对选项进行搜索。

## en-US

Invoice / Currency

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
    height: '42px',
    width: '100%',
},
  twrp: {
    display: 'inline-block',
    padding: '5px 10px',
  },
  pic: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#dae1e9',
    float: 'left',
    margin: '8px 0 8px 0',
  },
  title: {
    width: '100%',
    float: 'left',
    fontSize: '13px',
    lineHeight: '1.38',
    marginBottom: '1px',
  },
  address: {
    width: '100%',
    float: 'left',
    fontSize: '11px',
    lineHeight: '1.18',
    color: '#9ba6b2',
  },
};


const Item = (props) => (
  <div class="maxwrp" style={styles.wrapper}>
      <div style={styles.pic}/>
        <div style={styles.twrp}>
          <div style={styles.title}>{props.name}</div>
          <div style={styles.address}>{props.address}</div>
        </div>
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
    <Option style={{ padding: '0px 12px' }} value="Bitcoin"><Item name="Bitcoin" address="Ft8X1v1LTa1ABafufpaCWyVj8KkaxUWE6xBhW6sNFJck"/></Option>
    <Option style={{ padding: '0px 12px' }} value="Ethereum"><Item name="Ethereum" address="8LQW8f7P5d5PZM7GtZEBgaqRPGSzS3DfPuiXrURJ4AJS"/></Option>
    <Option style={{ padding: '0px 12px' }} value="Litecoin"><Item name="Litecoin" address="Gtb1WRznfchDnTh37ezoDTJ4wcoKaRsKqKjJjy7nm2zU"/></Option>
  </Select>,
  mountNode
);
````
