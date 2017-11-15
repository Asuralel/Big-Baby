import React, {Component} from 'react'
import { Table , Input, Icon, Button, Popconfirm } from 'antd';
import http from '../../utils/HttpClient';
import * as DataGridAction from "./DataGridAction.js";
import AddComponent from "./AddComponent";
import addScss from "./add.scss";


const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable
      ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
      : value
    }
  </div>
);
//可以编辑的单元格对象组件
// class EditableCell extends React.Component {
//   state = {
//     value: this.props.value,
//     editable: false,
//   }
//   handleChange = (e) => {
//     const value = e.target.value;
//     this.setState({ value });
//   }
//   //打勾
//   check = () => {
//     this.setState({ editable: false });
//     if (this.props.onChange) {
//       this.props.onChange(this.state.value);
//     }
//   }
//   //编辑
//   edit = () => {
//     this.setState({ editable: true });
//   }
//   render() {
//     //根据当前的state状态，去重新渲染页面
//     const { value, editable } = this.state;
//     return (
//       <div className="editable-cell">
//         {
//           editable ?
//             <div className="editable-cell-input-wrapper">
//               <Input
//                 value={value}
//                 onChange={this.handleChange}
//                 onPressEnter={this.check}
//               />
//               <Icon
//                 type="check"
//                 className="editable-cell-icon-check"
//                 onClick={this.check}
//               />
//             </div>
//             :
//             <div className="editable-cell-text-wrapper">
//               {value || ' '}
//               <Icon
//                 type="edit"
//                 className="editable-cell-icon"
//                 onClick={this.edit}
//               />
//             </div>
//         }
//       </div>
//     );
//   }
// }

//添加弹窗





export default class DatagridComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            thead: [],
            data: [],
            pagination: {},
            loading: false,
            showAdd:'none'
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
          var total = res.total;
          var data = [];
          var columns = [];
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
        onDelete = (key) => {
          const data = [...this.state.data];
          data.forEach(function(item){
            if(item.key==key){
              data.splice(key,1)
            }
          })
          this.setState({ data: data.filter(item => {item.key !== key}) });
        }
        handleAdd = () => {
          // const { count, data } = this.state;
          // const newData = {
          //   key: count,
          //   name: `Edward King ${count}`,
          //   age: 32,
          //   address: `London, Park Lane no. ${count}`,
          // };
          // this.setState({
          //   data: [...data, newData],
          //   count: count + 1,
          // });
            this.setState({showAdd:"block"})
        }
      componentDidMount() {
        this.fetch();
      }
      render() {
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <br/>
                <Table columns={this.state.thead}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
                />
                <div style={{display:this.state.showAdd}} className="addCom" >
                  <AddComponent  addUrl={this.props.url} data={this.state.data}/>
                </div>
                
            </div>
        )
    }
}




