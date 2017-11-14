/* 
* @Author: Marte
* @Date:   2017-11-13 11:38:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 16:04:43
*/

import React, {Component} from 'react'
import { Table , Input, Icon, Button, Popconfirm } from 'antd';
import http from '../../utils/HttpClient';
import DataGridAction from "./DataGridAction.js";

// const EditableCell = ({ editable, value, onChange }) => (
//   <div>
//     {editable
//       ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
//       : value
//     }
//   </div>
// );
//可以编辑的单元格对象组件
class EditableCell extends React.Component {
  //设置初始的value值，初始默认不可以编辑，所以editable为false
  state = {
    value: this.props.value,
    editable: false,
  }
  //点击编辑单元格：把修改后的值覆盖原来的值
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  //打勾
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  //编辑
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    //根据当前的state状态，去重新渲染页面
    const { value, editable } = this.state;
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              <Input
                value={value}
                onChange={this.handleChange}
                onPressEnter={this.check}
              />
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}





export default class DatagridComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            thead: [],
            data: [],
            pagination: {},
            loading: false
        };
    }
      handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
          pagination: pager
        });
        this.fetch({
          results: pagination.pageSize,
          page: pagination.current,
          ...filters
        })
      }
      
      fetch = (params = {}) => {
        this.setState({ loading: true });
        http.get(this.props.url,{
            results: 10,
            ...params
          }).then((res) => {
            var res = JSON.parse(res);
            var datas = res;
            var total = res.total
            var data = [];
            var columns = [];
            datas.forEach(function(item,idx){
              item['key'] = idx;
            })
            console.log(datas)
            for(var attr in datas[0]){
                data.push(attr)
            }
            var data1 =this.props.title1.split(',');
            for (let i = 0; i < data1.length; i++) {
              columns.push({
                title: data1[i].toString(),
                dataIndex: `${data1[i]}`,
                render: (text, record) => (
                        <EditableCell
                          value={text}
                          onChange={this.onCellChange(record.key, 'name')}
                        />
                )
              });
            }
            columns.push(
                {
                    title: 'operation',
                    dataIndex: 'operation',
                    render: (text, record) => {
                    return (
                        this.state.data.length > 1 ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                            <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                    )}
                }  
            )
            const pagination = { ...this.state.pagination };
            pagination.total = total;
            this.setState({
                loading: false,
                data: datas,
                thead : columns,
                pagination
            })
        })
      }
      onCellChange = (key, dataIndex) => {
          return (value) => {
            const data = [...this.state.data];
            const target = data.find(item => item.key === key);
            if (target) {
              target[dataIndex] = value;
              this.setState({ data });
            }
          };
        }
        onDelete = (key) => {console.log(key)
          var current = [];
          const data = [...this.state.data];
          data.forEach(function(item){
            if(item.key==key){
                current.push(item);
            }
          })
          console.log(current);
          var arr =[];
          for(var attr in current[0]){
            arr.push(attr);
          }

          DataGridAction(this.props.url,arr[0]);
          this.setState({ data: data.filter(item => {item.key !== key}) });
        }
        handleAdd = () => {
          const { count, data } = this.state;
          const newData = {
            key: count,
            name: `Edward King ${count}`,
            age: 32,
            address: `London, Park Lane no. ${count}`,
          };
          this.setState({
            data: [...data, newData],
            count: count + 1,
          });
        }
      componentDidMount() {
        this.fetch();
      }
      render() {
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table columns={this.state.thead}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />
            </div>
        )
    }
}




