/* 
* @Author: Marte
* @Date:   2017-11-13 11:38:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-15 09:16:01
*/

import React, {Component} from 'react'
import { Table , Input, Icon, Button, Popconfirm } from 'antd';
import http from '../../utils/HttpClient';


const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);

var titles = [];
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
            
            var columns = [];
            datas.forEach(function(item,idx){
              item['key'] = String(idx);
            })
            console.log(datas)
            
            if(this.props.title){
              titles =this.props.title.split(',');
            }else{
              for(var attr in datas[0]){
                  titles.push(attr)
              }
            }
            for (let i = 0; i < titles.length; i++) {
              columns.push({
                title: titles[i].toString(),
                dataIndex: `${titles[i]}`,
                key: `${titles[i]}`,
                render: (text, record) => this.renderColumns(text, record, titles[i].toString()),
              });
            }
            columns.push(
                {
                    title: 'delete',
                    dataIndex: 'delete',
                    render: (text, record) => {
                    return (
                        this.state.data.length > 0  ?
                        (
                            <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                            <a href="#">Delete</a>
                            </Popconfirm>
                        ) : null
                    )}
                }  
            )
            columns.push(
                {
                    title: 'update',
                    dataIndex: 'update',
                    render: (text, record) => {
                      const { editable } = record;
                      return (
                        <div className="editable-row-operations">
                          {
                            editable ?
                              <span>
                                <a onClick={() => this.save(record.key)}>Save</a>
                                <Popconfirm title="Sure to cancel?" onConfirm={() => this.cancel(record.key)}>
                                  <a>Cancel</a>
                                </Popconfirm>
                              </span>
                              : <a onClick={() => this.edit(record.key)}>Edit</a>
                          }
                        </div>
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
      onDelete = (key) => {
        var current = [];
        const data = [...this.state.data];
        http.get(this.props.delete_url,`id=${data[key].id}`).then(
          data.forEach(function(item){
            if(item.key==key){
                current.push(item);
                data.splice(key,1)
            }
          })
        )
        this.setState({ data: data});

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

      renderColumns(text, record, column) {
        return (
          <EditableCell
            editable={record.editable}
            value={text}
            onChange={value => this.handleChange(value, record.key, column)}
          />
        );
      }
      handleChange(value, key, column) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target[column] = value;
          this.setState({ data: newData });
        }
      }
      edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          target.editable = true;
          this.setState({ data: newData });
        }
      }
      save(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        var str = '';
        for (let i = 0; i < titles.length; i++) {
            for(var item in newData[key]){
              if(item==titles[i]){

                str += `${item}=${newData[key][titles[i]]}&`;
              }
            }
        }
        str += `id=${newData[key].id}`
        http.get(this.props.update_url,str).then(
          
        )
        console.log(str)
        console.log(newData)
        if (target) {
          delete target.editable;
          this.setState({ data: newData });
          this.cacheData = newData.map(item => ({ ...item }));
        }
      }
      cancel(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
          Object.assign(target, this.cacheData.filter(item => key === item.key)[0]);
          delete target.editable;
          this.setState({ data: newData });
        }
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




