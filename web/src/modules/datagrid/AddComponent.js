import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as AddActions from './AddAction'
import SpinnerComponent from '../spinner/SpinnerComponent';
import {Router,Route,Link,hashHistory} from "react-router";
import addScss from "./add.scss";

import { Input,Button} from 'antd';


class AddComponent extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.Init(this.props.addUrl)

    }
    addHandler(){
        console.log(this.props.addUrl);
        var arr = this.props.addUrl.split("/");
        console.log(arr[arr.length-2]);
        this.props.add(arr[arr.length-2],`${this.refs.input1.refs.input.id}=${this.refs.input1.refs.input.value}
            &${this.refs.input2.refs.input.id}=${this.refs.input2.refs.input.value}
            &${this.refs.input3.refs.input.id}=${this.refs.input3.refs.input.value}
            &${this.refs.input4.refs.input.id}=${this.refs.input4.refs.input.value}
            &${this.refs.input5.refs.input.id}=${this.refs.input5.refs.input.value}
            &${this.refs.input6.refs.input.id}=${this.refs.input6.refs.input.value}
            &${this.refs.input7.refs.input.id}=${this.refs.input7.refs.input.value}`)

    }
    close(e){
        e.target.parentNode.parentNode.style.display = "none";
    }
    render(){
        return(
              <div className="add" ref="add">
                    <h1>添加</h1>
                    <ul>
                    {
                       this.props.dataset ? Object.keys( this.props.dataset[0]).map(function(key, idx){
                        if(key=="id"){
                            return;
                        }
                            return <li key={'li'+idx}>
                                <label>{key}</label>
                                <Input ref={"input"+idx} id={key}/>
                            </li>
                            
                        }) : null
                    }
                    </ul>
                    <Button type="primary" onClick={this.addHandler.bind(this)}>提交</Button>
                    <span className="close" onClick={this.close.bind(this)}>&times;</span>
                </div>
            
        )
    }
}



const mapStateToProps = state => ({
    loading: state.add.loading,
    dataset:state.add.dataset
})
export default connect(mapStateToProps, AddActions)(AddComponent)
