/* 
* @Author: Marte
* @Date:   2017-11-13 11:38:44
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-14 12:04:36
*/
import React, {Component} from 'react'
import { Table , Input, Icon, Button, Popconfirm } from 'antd';
import http from '../../utils/HttpClient';

// const EditableCell = ({ editable, value, onChange }) => (
//   <div>
//     {editable
//       ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
//       : value
//     }
//   </div>
// );
class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
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
          sortField: sorter.field,
          sortOrder: sorter.order,
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
            console.log(res)
            var data = [];
            var columns = [];
            for(var attr in datas[0]){
                data.push(attr)
            }
            for (let i = 0; i < data.length; i++) {
              columns.push({
                title: data[i].toString(),
                dataIndex: `${data[i]}`,
                sorter: true,
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
        onDelete = (key) => {
          const data = [...this.state.data];
          this.setState({ data: data.filter(item => item.key !== key) });
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

