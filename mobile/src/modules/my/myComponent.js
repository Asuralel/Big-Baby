import React from 'react'
import {Route} from 'react-router'

import MyHome from "./MyHome"
class MyComponent extends React.Component{
    render(){
        console.log(666)
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
} 
export default MyComponent
